# New HMCC Website

This branch is currently in proposal stage. Nothing is set in stone. For more information, contact xumaple@umich.edu.

## Current Website State

Currently, the [annarbor.hmcc.net](https://annarbor.hmcc.net) website is a WordPress (WP for short) application hosted on [Dreamhost](https://www.dreamhost.com/hosting/shared/). It uses a php frontend with WordPress themes, and also WordPress as a traditional Content Management System (CMS for short), for storing data such as staff info and sermon organization. In regards to sermon recordings, the website stores its audio locally in WordPress CMS, but links to respective sermon videos which are uploaded to [vimeo](https://vimeo.com/).

## Problem Statement

WP is an outdated technology nearing its deprecation lifestage. As our church has iterated on this website's design and content over the years, we've accumulated a considerable amount of technological debt:

- One major flaw in our church's WP infrastructural design is that it does not have built in compatible version control. Our version control tooling, [git](https://git-scm.com/), stores our repository in [github](https://github.com/hmcc-global/annarbor.hmcc.net). However, this is separate from where the website is actually deployed, which is on Dreamhost.
  - Due to several reasons, the repo sitting on the Dreamhost server has gotten out of sync with the origin branch, and due to certificate incompatibilities (nobody migrated that repo to use ssl certificates in time before Github fully deprecated https certificates), we have no way of re-syncing the deployment repo with origin. In essence, we might as well not be using any version control.
- Dreamhost does not use proper deployment validation, leading to lots of broken/stale links on our actual site, and no way to know things are broken without manually testing them.
- There are many plugins installed which are not necessarily being used anymore - but with the original developers no longer around, it is hard to determine which ones are obsolete. These plugins slow down the website.
- WP uses a traditional CMS, which provides minimal flexibility in how we can manage our content and deploy it to the website. Furthermore, it only supports REST APIs, and there is no easy way to generate APIs for information that has already been uploaded, only for information we upload in the future (because we did not previously opt into that option).
- The version of WP we are currently using is over a year old. It is hard to keep up with the most updated (and secure) versions, and manually updating versions comes at the risk of deprecating old plugins.
- WP lacks a lot of cybersecurity. Although we as a church have never (to my knowledge) been attacked, it would relatively easy for a malicious intruder to compromise our site, then delete data, change login credentials, etc. Consider this list of [41k+ WordPress vulnerabilities...](https://wpscan.com/)
- Because of the sheer size of our WP data, it is near impossible to edit/develop this website locally. This adds to the debt of needing to develop within the deployed server, which leads to security vulnerabilities, uncaught mistakes, etc.

As a result of these areas of debt, in the coming months as the website is being redesigned, this is an opportune time to migrate the website to newer, safer technologies which are also much easier to develop on.

## Possible Approaches

Because WP currently serves as both a frontend website as well as our CMS, we have multiple options to move forward. This proposal will be split up into two halves: (1) whether or not to migrate the frontend application from PHP on WP to self-hosted HTML, and (2) whether or not to migrate the CMS from WP to some other self-hosted CMS. The following two sections will discuss these two points separately, but note the nuance that a switch of (2) must also necessitate a switch of (1) (but this does not apply for the other way around).

### Section 1: Front end infrastructure

The majority of the tech debt lies in using a WP frontend which lacks deployment validation and proper version control. I propose we solve these issues by moving to a React-based frontend, rather than continuing to use the current PHP frontend. Consider the following pros/cons:

***Pros***:

- Can implement deployment validation
- Can use version control for deployment
- Many more developers are familiar with HTML/React/CSS than HTML/PHP (TODO back up with results from survey)

***Cons***:

*No real cons, other than the extra work involved here* (which are offset because the website will be rewritten for remodeling anyways).

#### **Why React?**

[React.js](https://react.dev/) is a modern Javascript framework which simplifies website development into reusable modules. It is the most popular Javascript framework today which suits our needs, and it will help us to write simple, reusable, easily maintained code for the website.

#### **What React framework infrastucture will we use?**

Two of the most popular React frameworks today are [`Gatsby.js`](https://www.gatsbyjs.com/) and [`Next.js`](https://nextjs.org/). They each serve slightly different purposes: `Gatsby` fits our website's current use case (static HTML) very well, whereas `Next` is a bit more complicated, but recent updates has essentially boosted it to the point of supersetting `Gatsby`'s functionality. Consider the following pros/cons for each:

Pros for `Gatsby`:

- Simpler than `Next` to develop
- Fits our current needs perfectly, but might struggle to implement certain future features outside of the current scope (eg. if we ever wanted a real-time likes/comment section for sermon recordings)
- Blazingly fast

Pros for `Next`:

- Wider feature set than `Gatsby`, so gives us more options in the future
- Allows any CMS query language (so WordPress CMS would still be a possibility), as opposed to `Gatsby` which limits to only GraphQL communication with the CMS (so WP would *not* be a possibility)
- Also quite fast following the most recent updates

With this in mind, and given the tight goal of completing the website rework by end of this summer, I suggest we move forward with using the `Gatsby` framework for a simpler, more streamlined approach.

### Section 2: Backend/CMS infrastructure

Even though it would be possible to switch the frontend approach as mentioned in the previous section, while maintaining the current WordPress CMS system, I strongly recommend against this approach. Instead, I propose for us to host a second server using [`Strapi`](https://strapi.io/) (an open source CMS system) on Dreamhost as our CMS (see the [technical details](#technical-details) section for more info), for the following reasons:

- `Strapi` is open-source. We host it on Dreamhost (at no extra cost), and get all of its perks. *Caveat: some premium features (some of which are discussed below) require payment.*
- The current WP CMS is very slow and difficult to use. Even though switching to `Strapi` would require the content manager users to learn a new API, the new interface is much more user friendly, is very easy to pick up, and offers much better user experiences. Some of these experiences include:
  - Much faster loading speeds
  - Ability to preview how content looks on the actual site
  - More types of content (eg. users validation, email types, dates, etc.)
  - More stable responsibility distribution/management (eg. can allow certain users to only edit certain posts, etc.)
- Because we host `Strapi` ourselves, there is room for customization. Moreover, these customizations can be developed upon locally and then pushed to production automatically (see [technical details](#technical-details)).
- `Strapi` offers GraphQL APIs, which corresponds well with the previous section's proposal to use `Gatsby`.
- `Strapi` allows the option for better user security with single sign on (however would require subscription).
- Using `Strapi` makes developing the website locally MUCH more feasible and painless.
  - Would even be able to develop locally using actual current site date for maximum compatibility and accuracy
- Using `Strapi` would allow us to manually configure our database, allowing us to export and backup our data (using [Dreamhost cron jobs](https://help.dreamhost.com/hc/en-us/articles/215088668-Create-a-cron-job)).
- `Strapi` offers a headless CMS (vs. WordPress is traditional CMS) which allows us to use the backend data for other purposes/apps in the future (eg. if we ever build a mobile app).

#### **Why Strapi?**

Out of all the open source headless CMS options, we chose `Strapi` because it had the highest rating from users and developers. This is important because it implies that this library has extremely comprehensive support working to maintain and improve upon its open source libraries.

### Technical Details

TBD

- continue to use dreamhost
  - mysql for strapi backend
  - cron job (for scheduled mysql backups)
  - nginx/apache server
  - github gatsby integrations
  - github auto deployment

## Miscellaneous (unorganized)

problems we could solve:

- no need to create new SC event every week
- can choose order to display sermons

