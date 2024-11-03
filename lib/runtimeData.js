const runtimeData = (function () {

    return {

        // Basic information.
        companyName: "MixaBa Games",
        productName: "ShcoolboySega",
        productVersion: "0.0.0.1",
        sdkVersion: "3.17.19",
        productDescription: "",

        // File references.
        buildURL: "bin",
        loaderURL: "bin/ShcoolboySega_Web_VKontakte.loader.js",
        dataURL: "bin/ShcoolboySega_Web_VKontakte.data.unityweb",
        frameworkURL: "bin/ShcoolboySega_Web_VKontakte.framework.js.unityweb",
        workerURL: "",
        codeURL: "bin/ShcoolboySega_Web_VKontakte.wasm.unityweb",
        symbolsURL: "",
        streamingURL: "streaming",

        // Visual information.
        logoType: "None",
        iconTextureName: "game_logo_256x256.png",
        backgroundTextureName: "dogmem.png",

        // Aspect ratio.
        desktopAspectRatio: -1,
        mobileAspectRatio: -1,

        // Debug mode.
        debugMode: false,

        // Prefs.
        prefsContainerTags: [ "json-data" ],

        // Platform specific scripts.
        wrapperScript: "vkontakteWrapper.js",

        // YandexGames.
        yandexGamesSDK: "/sdk.js",

        // Yandex Ads Network.
        yandexGameId: "",
        yandexBannerId: "",
        yandexInterstitialDesktopId: "",
        yandexInterstitialMobileId: "",
        yandexRewardedDesktopId: "",
        yandexRewardedMobileId: "",

        // GameDistribution.
        gameDistributionId: "",
        gameDistributionPrefix: "mirragames_",

    }

})();