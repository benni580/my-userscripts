# Elearning Session Extender (TGM)

[<- Back to Main Project](../README.md)

This script prevents the TGM Elearning (Moodle) platform from automatically logging you out after a period of inactivity.

## How it Works

The script works by silently sending a lightweight request to the server every 10 minutes, which simulates user activity. This resets the session timeout counter without interrupting you or reloading the page.

## Installation

1.  Ensure you have a [Userscript Manager](https://github.com/benni580/my-userscripts#step-1-install-a-userscript-manager) installed.
2.  Click the link below to install:

    [**⬇️ Install Script**](https://raw.githubusercontent.com/benni580/my-userscripts/main/elearning-session-extender/elearning-session-extender.user.js)

## Configuration

This script requires no configuration to work. However, if you wish to change the refresh interval, you can edit the script and modify the following line:

```javascript
// The interval in minutes at which to refresh the session.
const REFRESH_INTERVAL_MINUTES = 10;