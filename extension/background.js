chrome.commands.onCommand.addListener((command) => {
    if (command === "query-selection") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: googleSelection
            });
        });
    }
});

function googleSelection() {
    const selection = window.getSelection().toString();
    if (selection && selection.trim().length > 0) {
        const query = encodeURIComponent(selection);
        const url = `https://www.google.com/search?q=${query}`;
        window.open(url, '_blank');
    }
}