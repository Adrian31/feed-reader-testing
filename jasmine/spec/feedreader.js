/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        // Make sure all feeds are defined and not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('all urls are defined and not empty', function() {
            // loop through feeds json to make sure they contain URLs and that they are defined.
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        // Make sure all feeds have a name and aren't empty
        it('all names are not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        // Check for inital hidden menu
        it('menu element is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });
        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        // Make sure menu icon click toggle is working
        it('menu changes visibility if menu icon is clicked', function() {
            // expect($('body').hasClass('menu-hidden')).toEqual(true);

            // Click once
            $(".menu-icon-link").trigger("click");
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $(".menu-icon-link").trigger("click");
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        // Make it asynchronous!
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        // Make sure there is at least one feed entry
        it('load function call returns at least one entry ', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        var firstFeed;
        // Test first feed loaded
        beforeEach(function(done) {
            loadFeed(0, function() {
                firstFeed = $('.feed').html();

                // Test second feed loaded
                loadFeed(1, function() {
                    done();
                });
            });
        });
        // Make sure two feeds are not the same
        it("change actually occus in news feed", function(done) {
            var secondFeed = $('.feed').html();
            expect(firstFeed).not.toBe(secondFeed);
            done();
        });
    });
}());
