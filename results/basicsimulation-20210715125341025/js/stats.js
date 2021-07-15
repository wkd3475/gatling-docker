var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "122850",
        "ok": "86157",
        "ko": "36693"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "60"
    },
    "maxResponseTime": {
        "total": "7340",
        "ok": "4350",
        "ko": "7340"
    },
    "meanResponseTime": {
        "total": "933",
        "ok": "97",
        "ko": "2894"
    },
    "standardDeviation": {
        "total": "1328",
        "ok": "279",
        "ko": "489"
    },
    "percentiles1": {
        "total": "20",
        "ok": "8",
        "ko": "3010"
    },
    "percentiles2": {
        "total": "3004",
        "ok": "32",
        "ko": "3025"
    },
    "percentiles3": {
        "total": "3036",
        "ok": "578",
        "ko": "3102"
    },
    "percentiles4": {
        "total": "3148",
        "ok": "1407",
        "ko": "3349"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 83475,
    "percentage": 68
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1425,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1257,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 36693,
    "percentage": 30
},
    "meanNumberOfRequestsPerSecond": {
        "total": "347.034",
        "ok": "243.381",
        "ko": "103.653"
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
        "total": "122850",
        "ok": "86157",
        "ko": "36693"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "60"
    },
    "maxResponseTime": {
        "total": "7340",
        "ok": "4350",
        "ko": "7340"
    },
    "meanResponseTime": {
        "total": "933",
        "ok": "97",
        "ko": "2894"
    },
    "standardDeviation": {
        "total": "1328",
        "ok": "279",
        "ko": "489"
    },
    "percentiles1": {
        "total": "20",
        "ok": "8",
        "ko": "3010"
    },
    "percentiles2": {
        "total": "3004",
        "ok": "32",
        "ko": "3025"
    },
    "percentiles3": {
        "total": "3036",
        "ok": "578",
        "ko": "3102"
    },
    "percentiles4": {
        "total": "3148",
        "ok": "1407",
        "ko": "3349"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 83475,
    "percentage": 68
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1425,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1257,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 36693,
    "percentage": 30
},
    "meanNumberOfRequestsPerSecond": {
        "total": "347.034",
        "ok": "243.381",
        "ko": "103.653"
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
