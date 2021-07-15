var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "7650",
        "ok": "4992",
        "ko": "2658"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "3000"
    },
    "maxResponseTime": {
        "total": "3039",
        "ok": "3001",
        "ko": "3039"
    },
    "meanResponseTime": {
        "total": "1309",
        "ok": "406",
        "ko": "3005"
    },
    "standardDeviation": {
        "total": "1400",
        "ok": "810",
        "ko": "2"
    },
    "percentiles1": {
        "total": "142",
        "ok": "50",
        "ko": "3005"
    },
    "percentiles2": {
        "total": "3004",
        "ok": "120",
        "ko": "3006"
    },
    "percentiles3": {
        "total": "3006",
        "ok": "2460",
        "ko": "3007"
    },
    "percentiles4": {
        "total": "3008",
        "ok": "2883",
        "ko": "3009"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4233,
    "percentage": 55
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 45,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 714,
    "percentage": 9
},
    "group4": {
    "name": "failed",
    "count": 2658,
    "percentage": 35
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "32.627",
        "ko": "17.373"
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
        "total": "7650",
        "ok": "4992",
        "ko": "2658"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "3000"
    },
    "maxResponseTime": {
        "total": "3039",
        "ok": "3001",
        "ko": "3039"
    },
    "meanResponseTime": {
        "total": "1309",
        "ok": "406",
        "ko": "3005"
    },
    "standardDeviation": {
        "total": "1400",
        "ok": "810",
        "ko": "2"
    },
    "percentiles1": {
        "total": "142",
        "ok": "50",
        "ko": "3005"
    },
    "percentiles2": {
        "total": "3004",
        "ok": "120",
        "ko": "3006"
    },
    "percentiles3": {
        "total": "3006",
        "ok": "2460",
        "ko": "3007"
    },
    "percentiles4": {
        "total": "3008",
        "ok": "2883",
        "ko": "3009"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4233,
    "percentage": 55
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 45,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 714,
    "percentage": 9
},
    "group4": {
    "name": "failed",
    "count": 2658,
    "percentage": 35
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "32.627",
        "ko": "17.373"
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
