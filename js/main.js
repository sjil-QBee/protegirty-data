// Global array to hold the data from the entries and track entries index
var entries = [];
var index = 0;

$(document).ready(function() {
    // Fetch data from DOCKER API in JSON format
    $.getJSON("http://assignment.redirectme.net/containers/json?all=1", function (jsonData) {
        // Put data from JSON into entries array
        jsonData["data"]["children"].forEach((entry, i) => {
            entries.push ({
                "Id": entry["data"]["Id"],
                "Names": entry["data"]["Names"],
                "Image": entry["data"]["Image"],
                "ImageID": entry["data"]["ImageID"],
                "Command": entry["data"]["Command"],
                "Created": entry["data"]["Created"],
                "Ports": entry["data"]["Ports"],
                "Labels": entry["data"]["Labels"],
                "State": entry["data"]["State"],
                "Status": entry["data"]["Status"],
                "HostConfig": entry["data"]["HostConfig"]
            });
        });
        
        renderEntries();

        // Start and Stop buttons with click handlers
        $("#btn-start").click(function () {
            start();
        });

        $("#btn-stop").click(function () {
            stop();
        });
    });
});

// Put information from the entries array into the entries row element
function renderEntries() {
    var entryRow = $(".entry-row");
    var i = 0;
    entryRow.each(function(elem) {
        $(this).fadeOut("fast", function() {
            //$(this).children(".post-title").text(entries[index + i]["title"]);
            $(this).find(".number").text(entries[index + i]["Id"]);
            $(this).find(".id").text(entries[index + i]["Names"]);
            $(this).find(".name").text(entries[index + i]["Image"]);
            $(this).find(".image-id").text(entries[index + i]["ImageID"]);
            $(this).find(".command").text(entries[index + i]["Command"]);
            $(this).find(".created").text(entries[index + i]["Created"]);
            $(this).find(".ports").text(entries[index + i]["Ports"]);
            $(this).find(".labels").text(entries[index + i]["Labels"]);
            $(this).find(".state").text(entries[index + i]["State"]);
            $(this).find(".status").text(entries[index + i]["Status"]);
            $(this).find(".host-config").text(entries[index + i]["HostConfig"]);
            $(this).fadeIn("fast");

            i++;
        });
    });
}
