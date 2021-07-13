var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12600",
        "ok": "3000",
        "ko": "9600"
    },
    "minResponseTime": {
        "total": "18",
        "ok": "18",
        "ko": "3000"
    },
    "maxResponseTime": {
        "total": "3034",
        "ok": "3002",
        "ko": "3034"
    },
    "meanResponseTime": {
        "total": "2469",
        "ok": "750",
        "ko": "3006"
    },
    "standardDeviation": {
        "total": "1046",
        "ok": "847",
        "ko": "2"
    },
    "percentiles1": {
        "total": "3006",
        "ok": "305",
        "ko": "3006"
    },
    "percentiles2": {
        "total": "3007",
        "ok": "1432",
        "ko": "3007"
    },
    "percentiles3": {
        "total": "3009",
        "ok": "2428",
        "ko": "3009"
    },
    "percentiles4": {
        "total": "3010",
        "ok": "2777",
        "ko": "3010"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1989,
    "percentage": 16
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 153,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 858,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 9600,
    "percentage": 76
},
    "meanNumberOfRequestsPerSecond": {
        "total": "59.155",
        "ok": "14.085",
        "ko": "45.07"
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
        "total": "12600",
        "ok": "3000",
        "ko": "9600"
    },
    "minResponseTime": {
        "total": "18",
        "ok": "18",
        "ko": "3000"
    },
    "maxResponseTime": {
        "total": "3034",
        "ok": "3002",
        "ko": "3034"
    },
    "meanResponseTime": {
        "total": "2469",
        "ok": "750",
        "ko": "3006"
    },
    "standardDeviation": {
        "total": "1046",
        "ok": "847",
        "ko": "2"
    },
    "percentiles1": {
        "total": "3006",
        "ok": "305",
        "ko": "3006"
    },
    "percentiles2": {
        "total": "3007",
        "ok": "1432",
        "ko": "3007"
    },
    "percentiles3": {
        "total": "3009",
        "ok": "2428",
        "ko": "3009"
    },
    "percentiles4": {
        "total": "3010",
        "ok": "2777",
        "ko": "3010"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1989,
    "percentage": 16
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 153,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 858,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 9600,
    "percentage": 76
},
    "meanNumberOfRequestsPerSecond": {
        "total": "59.155",
        "ok": "14.085",
        "ko": "45.07"
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
