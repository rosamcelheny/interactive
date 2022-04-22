function load_entries() {
    let channel = "henry-klumb";
    let makeURL = (per, page) =>
        `https://api.are.na/v2/channels/${channel}?per=${per}&page=${page}`;

    fetch(makeURL(1, 1))
        .then(res => res.json())
        .then(json => {
            $("#title").html(json.title);
            console.log(json);
        });

    fetch(makeURL(1, 1))
        .then(res => res.json())
        .then(json => (count = json.length))
        .then(count => {
            let per = 100;
            let pages = Math.ceil(count / per);

            let fetches = [];
            for (let page = 1; page <= pages; page++) {
                fetches.push(
                    fetch(makeURL(per, page))
                    .then(res => res.json())
                    .then(json => json.contents)
                );
            }

            Promise.all(fetches).then(contents => {
                contents.forEach(content => {
                    content.forEach(entry => {
                        makeEntry(entry);
                    });
                });
            });
        });

    function makeEntry(entry) {
        console.log(entry);
        let entryTemplate = document.getElementById("entry-template");
        let entryEl = entryTemplate.content.cloneNode(true);
        let entryItem = entryEl.querySelector("div");

        let entryClass = entry.class;

        if (entryClass == "Image") {
            entryItem.querySelector("a").href = entry.image.original.url;
            entryItem.querySelector("img").src = entry.image.display.url;
            entryItem.querySelector(".title").innerHTML = entry.title;
            entryItem.querySelector(".hover-title").innerHTML = entry.title;
            entryItem.querySelector(".description").innerHTML = entry.description_html;
        } else if (entryClass == "Text") {
            entryItem.querySelector(".title").innerHTML = entry.title;
            entryItem.querySelector(".description").innerHTML = entry.content_html;
            console.log(entry.content_html);
        } else if (entryClass == "Channel") {
            entryItem.querySelector(".title").innerHTML = entry.title;
            entryItem.querySelector(".description").innerHTML =
                entry.metadata.description;
        } else if (entryClass == "Media") {
            entryItem.querySelector(".title").innerHTML = entry.title;
            entryItem.querySelector(".embed").innerHTML = entry.embed.html;
        } else if (entryClass == "Link") {
            entryItem.querySelector("a").href = entry.source.url;
            entryItem.querySelector("a").innerHTML = entry.title;
        }   

        let entriesEl = document.getElementById("entries");
        entriesEl.insertBefore(entryEl, entriesEl.firstChild);

    }
}

load_entries();