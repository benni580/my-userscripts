# My Userscript Collection

A collection of personal Userscripts designed to fix small annoyances and automate repetitive tasks on the websites I use.

## How to Install a Script

Follow these steps to get any of the scripts below working in your browser.

### Step 1: Install a Userscript Manager

You need to install a browser extension that can run these scripts. This only needs to be done once. Choose the right one for your browser:

*   **Firefox:** [**Tampermonkey**](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) (Recommended)
*   **Chrome:** [**Tampermonkey**](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) (Recommended)
*   **Safari:** [**Userscripts**](https://apps.apple.com/app/userscripts/id1463298887) (Free)

### Step 2: Install the Script

This can be done in two ways. Try the Easy Way first.

#### The Easy Way (1-Click Install)

1.  In the list below, find the script you want.
2.  Click the **[Install]** link for that script.
3.  Your Userscript Manager *should* open a new tab and ask you to confirm the installation. Just click "Install" there, and you're done!

#### The Manual Way (If the Easy Way Fails)

Sometimes, especially on Safari, clicking the install link will just show you a page full of code. If that happens, don't worry. Just do this:

1.  Click the **[Install]** link for the script you want. You will see a page of code.
2.  Copy all the code.
3.  Open your Userscript Manager's dashboard.
4.  Find the button to create a new script (it's often a **`+`** icon).
5.  Delete any template code in the new editor window.
6.  Paste your copied code into the empty editor.
7.  Save the script.

## Available Scripts

Each script is organized into its own folder. Click on a script's name for more details, or hit "Install" to add it directly.

---

### WebUntis

Scripts designed to improve the WebUntis experience.

| Script Name | Description | Details & Config | Install |
| :--- | :--- | :---: | :---: |
| **Session Extender** | Prevents automatic logout from inactivity. | [**Read Me**](./untis-session-extender/README.md) | [**Install**](https://raw.githubusercontent.com/benni580/my-userscripts/refs/heads/main/untis-session-extender/untis-session-extender.user.js) |
| **Redirector Watcher** | Redirects you to the timetable after login. | [**Read Me**](./untis-redirect-watcher/README.md) | [**Install**](https://raw.githubusercontent.com/benni580/my-userscripts/refs/heads/main/untis-redirect-watcher/untis-redirect-watcher.user.js) |

---

## How This Repository is Organized

This project is structured to be easy to maintain and expand.
*   Each script lives in its own dedicated folder.
*   Each folder contains the `.user.js` file itself and a detailed `README.md` explaining what it does and how to configure it.
*   This main page only lists the available scripts.

To add a new script, simply create a new folder and add a new row to the tables above.

## License

This project is licensed under the MIT License.