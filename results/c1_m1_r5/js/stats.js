var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "34100",
        "ok": "28420",
        "ko": "5680"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "14",
        "ko": "3003"
    },
    "maxResponseTime": {
        "total": "5182",
        "ok": "4409",
        "ko": "5182"
    },
    "meanResponseTime": {
        "total": "932",
        "ok": "513",
        "ko": "3027"
    },
    "standardDeviation": {
        "total": "1199",
        "ok": "818",
        "ko": "113"
    },
    "percentiles1": {
        "total": "100",
        "ok": "70",
        "ko": "3008"
    },
    "percentiles2": {
        "total": "1998",
        "ok": "635",
        "ko": "3011"
    },
    "percentiles3": {
        "total": "3010",
        "ok": "2475",
        "ko": "3046"
    },
    "percentiles4": {
        "total": "3059",
        "ok": "2932",
        "ko": "3516"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 21879,
    "percentage": 64
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1350,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5191,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "count": 5680,
    "percentage": 17
},
    "meanNumberOfRequestsPerSecond": {
        "total": "215.823",
        "ok": "179.873",
        "ko": "35.949"
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
        "total": "34100",
        "ok": "28420",
        "ko": "5680"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "14",
        "ko": "3003"
    },
    "maxResponseTime": {
        "total": "5182",
        "ok": "4409",
        "ko": "5182"
    },
    "meanResponseTime": {
        "total": "932",
        "ok": "513",
        "ko": "3027"
    },
    "standardDeviation": {
        "total": "1199",
        "ok": "818",
        "ko": "113"
    },
    "percentiles1": {
        "total": "100",
        "ok": "70",
        "ko": "3008"
    },
    "percentiles2": {
        "total": "1998",
        "ok": "635",
        "ko": "3011"
    },
    "percentiles3": {
        "total": "3010",
        "ok": "2475",
        "ko": "3046"
    },
    "percentiles4": {
        "total": "3059",
        "ok": "2932",
        "ko": "3516"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 21879,
    "percentage": 64
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1350,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5191,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "count": 5680,
    "percentage": 17
},
    "meanNumberOfRequestsPerSecond": {
        "total": "215.823",
        "ok": "179.873",
        "ko": "35.949"
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
