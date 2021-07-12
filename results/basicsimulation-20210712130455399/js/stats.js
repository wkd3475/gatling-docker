var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "750",
        "ok": "750",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "15",
        "ok": "15",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "13675",
        "ok": "13675",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5458",
        "ok": "5458",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4952",
        "ok": "4952",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5327",
        "ok": "5327",
        "ko": "-"
    },
    "percentiles2": {
        "total": "10647",
        "ok": "10647",
        "ko": "-"
    },
    "percentiles3": {
        "total": "12255",
        "ok": "12255",
        "ko": "-"
    },
    "percentiles4": {
        "total": "12387",
        "ok": "12387",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 265,
    "percentage": 35
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 11,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 474,
    "percentage": 63
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "19.737",
        "ok": "19.737",
        "ko": "-"
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
        "total": "750",
        "ok": "750",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "15",
        "ok": "15",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "13675",
        "ok": "13675",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5458",
        "ok": "5458",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4952",
        "ok": "4952",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5327",
        "ok": "5327",
        "ko": "-"
    },
    "percentiles2": {
        "total": "10647",
        "ok": "10647",
        "ko": "-"
    },
    "percentiles3": {
        "total": "12255",
        "ok": "12255",
        "ko": "-"
    },
    "percentiles4": {
        "total": "12387",
        "ok": "12387",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 265,
    "percentage": 35
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 11,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 474,
    "percentage": 63
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "19.737",
        "ok": "19.737",
        "ko": "-"
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
