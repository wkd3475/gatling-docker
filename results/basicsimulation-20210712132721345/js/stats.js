var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1500",
        "ok": "508",
        "ko": "992"
    },
    "minResponseTime": {
        "total": "18",
        "ok": "18",
        "ko": "3004"
    },
    "maxResponseTime": {
        "total": "4010",
        "ok": "3011",
        "ko": "4010"
    },
    "meanResponseTime": {
        "total": "2098",
        "ok": "321",
        "ko": "3008"
    },
    "standardDeviation": {
        "total": "1341",
        "ok": "728",
        "ko": "32"
    },
    "percentiles1": {
        "total": "3006",
        "ok": "43",
        "ko": "3007"
    },
    "percentiles2": {
        "total": "3008",
        "ok": "66",
        "ko": "3008"
    },
    "percentiles3": {
        "total": "3009",
        "ok": "2307",
        "ko": "3010"
    },
    "percentiles4": {
        "total": "3010",
        "ok": "2957",
        "ko": "3010"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 445,
    "percentage": 30
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 59,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 992,
    "percentage": 66
},
    "meanNumberOfRequestsPerSecond": {
        "total": "23.81",
        "ok": "8.063",
        "ko": "15.746"
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
        "total": "1500",
        "ok": "508",
        "ko": "992"
    },
    "minResponseTime": {
        "total": "18",
        "ok": "18",
        "ko": "3004"
    },
    "maxResponseTime": {
        "total": "4010",
        "ok": "3011",
        "ko": "4010"
    },
    "meanResponseTime": {
        "total": "2098",
        "ok": "321",
        "ko": "3008"
    },
    "standardDeviation": {
        "total": "1341",
        "ok": "728",
        "ko": "32"
    },
    "percentiles1": {
        "total": "3006",
        "ok": "43",
        "ko": "3007"
    },
    "percentiles2": {
        "total": "3008",
        "ok": "66",
        "ko": "3008"
    },
    "percentiles3": {
        "total": "3009",
        "ok": "2307",
        "ko": "3010"
    },
    "percentiles4": {
        "total": "3010",
        "ok": "2957",
        "ko": "3010"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 445,
    "percentage": 30
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 59,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 992,
    "percentage": 66
},
    "meanNumberOfRequestsPerSecond": {
        "total": "23.81",
        "ok": "8.063",
        "ko": "15.746"
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
