var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "97200",
        "ok": "68630",
        "ko": "28570"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "8"
    },
    "maxResponseTime": {
        "total": "108310",
        "ok": "106158",
        "ko": "108310"
    },
    "meanResponseTime": {
        "total": "23595",
        "ok": "14866",
        "ko": "44565"
    },
    "standardDeviation": {
        "total": "27582",
        "ok": "22610",
        "ko": "27154"
    },
    "percentiles1": {
        "total": "10003",
        "ok": "1621",
        "ko": "41322"
    },
    "percentiles2": {
        "total": "44525",
        "ok": "23945",
        "ko": "68888"
    },
    "percentiles3": {
        "total": "75857",
        "ok": "65018",
        "ko": "86196"
    },
    "percentiles4": {
        "total": "89746",
        "ok": "77535",
        "ko": "96761"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 29553,
    "percentage": 30
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2328,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 36749,
    "percentage": 38
},
    "group4": {
    "name": "failed",
    "count": 28570,
    "percentage": 29
},
    "meanNumberOfRequestsPerSecond": {
        "total": "279.31",
        "ok": "197.213",
        "ko": "82.098"
    }
},
contents: {
"req_request-1-46da4": {
        type: "REQUEST",
        name: "request_1",
path: "request_1",
pathFormatted: "req_request-1-46da4",
stats: {
    "name": "request_1",
    "numberOfRequests": {
        "total": "97200",
        "ok": "68630",
        "ko": "28570"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "8"
    },
    "maxResponseTime": {
        "total": "108310",
        "ok": "106158",
        "ko": "108310"
    },
    "meanResponseTime": {
        "total": "23595",
        "ok": "14866",
        "ko": "44565"
    },
    "standardDeviation": {
        "total": "27582",
        "ok": "22610",
        "ko": "27154"
    },
    "percentiles1": {
        "total": "10003",
        "ok": "1621",
        "ko": "41322"
    },
    "percentiles2": {
        "total": "44525",
        "ok": "23945",
        "ko": "68888"
    },
    "percentiles3": {
        "total": "75857",
        "ok": "65018",
        "ko": "86196"
    },
    "percentiles4": {
        "total": "89746",
        "ok": "77535",
        "ko": "96761"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 29553,
    "percentage": 30
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2328,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 36749,
    "percentage": 38
},
    "group4": {
    "name": "failed",
    "count": 28570,
    "percentage": 29
},
    "meanNumberOfRequestsPerSecond": {
        "total": "279.31",
        "ok": "197.213",
        "ko": "82.098"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
