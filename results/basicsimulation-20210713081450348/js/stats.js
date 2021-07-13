var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "9450",
        "ok": "9440",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "502"
    },
    "maxResponseTime": {
        "total": "3198",
        "ok": "3198",
        "ko": "1512"
    },
    "meanResponseTime": {
        "total": "64",
        "ok": "63",
        "ko": "707"
    },
    "standardDeviation": {
        "total": "182",
        "ok": "181",
        "ko": "402"
    },
    "percentiles1": {
        "total": "10",
        "ok": "10",
        "ko": "507"
    },
    "percentiles2": {
        "total": "37",
        "ok": "36",
        "ko": "511"
    },
    "percentiles3": {
        "total": "284",
        "ok": "279",
        "ko": "1511"
    },
    "percentiles4": {
        "total": "1039",
        "ok": "1038",
        "ko": "1512"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9235,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 189,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 16,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 10,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "143.182",
        "ok": "143.03",
        "ko": "0.152"
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
        "total": "9450",
        "ok": "9440",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "502"
    },
    "maxResponseTime": {
        "total": "3198",
        "ok": "3198",
        "ko": "1512"
    },
    "meanResponseTime": {
        "total": "64",
        "ok": "63",
        "ko": "707"
    },
    "standardDeviation": {
        "total": "182",
        "ok": "181",
        "ko": "402"
    },
    "percentiles1": {
        "total": "10",
        "ok": "10",
        "ko": "507"
    },
    "percentiles2": {
        "total": "37",
        "ok": "36",
        "ko": "511"
    },
    "percentiles3": {
        "total": "284",
        "ok": "279",
        "ko": "1511"
    },
    "percentiles4": {
        "total": "1039",
        "ok": "1038",
        "ko": "1512"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9235,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 189,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 16,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 10,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "143.182",
        "ok": "143.03",
        "ko": "0.152"
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
