$(document).ready(function() {
    $("#CapitalCoinBtn").click(function() {
        $("#bitCoinView").hide();
        $("#bitCoinView").fadeOut();
        $("#capitalCoinView").show();
        $("#capitalCoinView").fadeIn();
    })
    $("#BitCoinBtn").click(function() {
        $("#capitalCoinView").hide();
        $("#capitalCoinView").fadeOut();
        $("#bitCoinView").show();
        $("#bitCoinView").fadeIn();
    })
});