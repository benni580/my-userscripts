# WebUntis Redirector Watcher

[<- Back to Main Project](../README.md)

This script automatically navigates you from the default `/today` landing page to your class timetable immediately after you log in.

## How it Works

WebUntis is a Single Page Application (SPA), which means it doesn't fully reload the page after login. This script acts as a "watcher" that waits for the `/today` page to become active. Once it detects this page, it finds the link to the class timetable and simulates a click, using the application's intended navigation flow.

## Installation

1.  Ensure you have a [Userscript Manager](https://github.com/benni580/my-userscripts#prerequisites) installed.
2.  Click the link below to install:

    [**⬇️ Install Script**](https://raw.githubusercontent.com/benni580/my-userscripts/refs/heads/main/untis-redirect-watcher/untis-redirect-watcher.user.js)

## Configuration

**This script may require configuration depending on your school's WebUntis setup.**

The script identifies the timetable link by its web address (`href`). The default is set to `/timetable/class`.

To check if this is correct for you:
1.  Log in to WebUntis and stay on the `/today` page.
2.  Right-click on the button or link that takes you to your class timetable.
3.  Select "Inspect" or "Inspect Element".
4.  Look at the highlighted HTML `<a>` tag and check the value of its `href="..."` attribute.

If the `href` value is different, edit the script and change the following line to match what you found:

```javascript
// This is a "CSS Selector" to find the correct link.
const timetableLinkSelector = 'a[href="/timetable/class"]';