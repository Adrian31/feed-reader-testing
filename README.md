# Project Overview

Udacity feed reader project using Jasmine to accomplish test-driven design examples(backward engineered).

## How to use?

Download/clone the folder and open index.html

## Tests conducted

1. Test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
2. Test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
3. Test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
4. Test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
5. Test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container..
6. Test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
7. Test that all feeds are defined!
