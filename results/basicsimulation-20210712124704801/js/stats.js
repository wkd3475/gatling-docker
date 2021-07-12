var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3250",
        "ok": "1782",
        "ko": "1468"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "14",
        "ko": "238"
    },
    "maxResponseTime": {
        "total": "60014",
        "ok": "59986",
        "ko": "60014"
    },
    "meanResponseTime": {
        "total": "36018",
        "ok": "19621",
        "ko": "55922"
    },
    "standardDeviation": {
        "total": "27699",
        "ok": "24949",
        "ko": "14850"
    },
    "percentiles1": {
        "total": "56308",
        "ok": "104",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "51960",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "58755",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "59654",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 956,
    "percentage": 29
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 821,
    "percentage": 25
},
    "group4": {
    "name": "failed",
    "count": 1468,
    "percentage": 45
},
    "meanNumberOfRequestsPerSecond": {
        "total": "18.362",
        "ok": "10.068",
        "ko": "8.294"
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
        "total": "3250",
        "ok": "1782",
        "ko": "1468"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "14",
        "ko": "238"
    },
    "maxResponseTime": {
        "total": "60014",
        "ok": "59986",
        "ko": "60014"
    },
    "meanResponseTime": {
        "total": "36018",
        "ok": "19621",
        "ko": "55922"
    },
    "standardDeviation": {
        "total": "27699",
        "ok": "24949",
        "ko": "14850"
    },
    "percentiles1": {
        "total": "56308",
        "ok": "104",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "51960",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "58755",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "59654",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 956,
    "percentage": 29
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 821,
    "percentage": 25
},
    "group4": {
    "name": "failed",
    "count": 1468,
    "percentage": 45
},
    "meanNumberOfRequestsPerSecond": {
        "total": "18.362",
        "ok": "10.068",
        "ko": "8.294"
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
