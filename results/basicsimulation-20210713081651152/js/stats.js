var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "24600",
        "ok": "23361",
        "ko": "1239"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "504"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "3123",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "101",
        "ok": "69",
        "ko": "698"
    },
    "standardDeviation": {
        "total": "693",
        "ok": "177",
        "ko": "2927"
    },
    "percentiles1": {
        "total": "13",
        "ok": "12",
        "ko": "517"
    },
    "percentiles2": {
        "total": "60",
        "ok": "49",
        "ko": "529"
    },
    "percentiles3": {
        "total": "515",
        "ok": "343",
        "ko": "582"
    },
    "percentiles4": {
        "total": "1040",
        "ok": "1037",
        "ko": "1551"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 22888,
    "percentage": 93
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 434,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 39,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1239,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "137.43",
        "ok": "130.508",
        "ko": "6.922"
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
        "total": "24600",
        "ok": "23361",
        "ko": "1239"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "504"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "3123",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "101",
        "ok": "69",
        "ko": "698"
    },
    "standardDeviation": {
        "total": "693",
        "ok": "177",
        "ko": "2927"
    },
    "percentiles1": {
        "total": "13",
        "ok": "12",
        "ko": "517"
    },
    "percentiles2": {
        "total": "60",
        "ok": "49",
        "ko": "529"
    },
    "percentiles3": {
        "total": "515",
        "ok": "343",
        "ko": "582"
    },
    "percentiles4": {
        "total": "1040",
        "ok": "1037",
        "ko": "1551"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 22888,
    "percentage": 93
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 434,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 39,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1239,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "137.43",
        "ok": "130.508",
        "ko": "6.922"
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
