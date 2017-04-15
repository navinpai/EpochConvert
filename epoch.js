chrome.contextMenus.create({
    title: "Convert %s to Readable Time",
    contexts:["selection"],
    onclick: function(info, tab) {
        var d = new Date(0);
        if(info.selectionText.length >= 12){
            d.setUTCMilliseconds(info.selectionText);
        } else {
            d.setUTCSeconds(info.selectionText);
        }
        alert(d.toUTCString());
    }
});
