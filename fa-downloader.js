// ==UserScript==
// @name         FA Downloader
// @namespace    fa-downloader
// @version      1.0.1
// @description  Download FA Media from sites including Twitter/Poipiku/Privatter
// @author       miravois
// @license      MIT
// @match        https://twitter.com/*
// @match        https://*.poipiku.com/*
// @match        https://privatter.net/*
// @match        https://d2pqhom6oey9wx.cloudfront.net/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAdYSURBVFiFpVdtcFXVFV1r73PvgxBADfkkmQrigKXqFFqgY/lhGcXaMnQqiQOSMlCHrwgkwJOgQi9FEJCEDJKMKV91QJg+OxbLCNgWrdjpTCmt1Y7aMgQshIQkgBBDvnjvnv5I8njv5QVo3T/evH3u2muvs/c5955D3KZ5npXLzacfFpFJhriDAFStFREIQAEgii/U4ugLL37tPYL2dnh5K0B+vtWsvJqnlfIQYN9RhN8pKxt5MRl2/cr6dBsITxbgUUdwrMXP3eV59P9vAQuWnB5p1K4isHtr+T1Hb4YN5VsFgII3GAGA8rVnH1XqT1Tsz595Lvfk/yxg4bKa7xqfheGOtmVVVaNbbpYcAF7yztyt0FWqOK0S3lH8/PCGSq8x1QY6y0i+VlQ69M+3LWDR0jMTBHb6nYOGldyqhIlW7p0boQ6XUXhs8cqh+0Mhq1fOXKhQ2Nd+uiLnxC0FFBd/ng31N54/O2z2G93lTGaeZ40bqR2rCtuG3L97HsOxz6s21M1QYszcZ7ODa9ZAh6XW73KMBmcUZzbE4iSR2GpkdcSNLLtZ8lC+1YA9t1PV5osgf7Ce2+l5No5rYWnOPkfskd2b69d6HsOO0aC1/qpErrigkuDpiUr57JWX7m3qKzkA1Nx/bkwH82arMCKAfzWSNzvNnBuTiJsTHPoHQ/x7b9mFJ2cUZzYIWRPa1vCdWExcC5YHa15NHdC+2PNGd8aOe97ZHPr+SFf4H1VRWn6TsJNU+CfSWgUnGsVRiv1Q6YQVGOYY/aywJL0eAPZtafjlwJTIQu24FmnloIppizIX9KrA8uWnMihyNTH5mtVnp0oEQ11wghXNpMX44OrckOtzrZJPGcpMa7B2QWluSKnjBeEsgT/et+G818svTAUAY2xZeyfHPb743g4jaDm0tT69h99ES2F0kiEOJZbRhP3j6uoeAM2OH3lLVNMBYLGXW1u1rvYVgbXzV+TVAoAS6SL6oVqOE/rfc1wtBICCRVn/jM5Y9LAVPgwgFFcBBcYHAoG/JgoQVxap+L81BhWi8rIIRgJA1frz+ymcTsPpOzfV7QMAIzJKgY1qpEwoB63vL07kG+j7x0U4ITrxnj/PP/d55br1dxclBgBde5tii0QYpuCkoT4ktP1J7lcFBHa6obQreQy0o5Q04khlQVHGqWR8v/9FY+UjczOK4irggJoMDABiZKwaZ/2SF/KCAr5pCKrIH+etyDnw9PKcAyryvgoQdsMHnirJDorY9Y5Fr13RYyoazRUVQBP/IokLoN+M1JbmLpzriIKG9mr0OXhFAPan6wBAKlqahWjum89Gc0UXoSGdvgO0ha0pVdUbaz9VXj8pQhXyidcr6mp9H9YRTIOwldb/1m8qG0aGLUcrsbsvvthcNxYhbYvn1aUkgqs21JWpIs0lNhmRKUr50dkvswuVMGJlqWNkqQiUWZmzFPixglPU5QZRSftdddPmRL73KhtTKTeqE62AiHw0CJFvA3g/LsJef1HEOQKyycBfSeqY7g/U1NDW+h+IVTttScYhADhY1fg3WrtDfJaL2HTHMZMTBaQMdMeR/j96VSDF4G0KfpgY4Ig7SYSeEbwrRgOqaASAtzY2DVTqTFEUHtp6aRAAEGhUEVcF7zq0a/xw+PuJfIR93Anz7Rt+jG1dd357h6vFwWDWtdjxPeWNI4jwcBG9IBFpF2MzVO18gseV8AV2gkNWRwwbAvT7UUwWwuGaSfMya2J5Pgk1prZ3ms1jZ941v1cLAEBUKlLDkSAAL3a8cGnGKQDRPf3rbY0jIhkZswJNF4tVgNa09FmBy02TH5ub/kE35OPEmQNAR6cTdCRSEZcz1nmmNPsTY5Cy4+UL30hG0GNPFKUf7nexaYsRPGhoHxh85dKWR+alH75ZzIm9l+8X2sADM4b8q08BANAWaF1liNLdmxqz+iIjaV034Km125XYnhI2PyP7PgWf2NOU7QqfdZw7V/fiShawr6Ih0/ftZhemtGDpkPM3m9mt7KO9l3IpsiFsTMmYgoG9zhl9HkpD1ZcHs6OzksCv1Ghd7FvK6XacpL4T9Q39HIJPDjC26J6Cu64iiZlkgwCgHZ33CUkI7lMgGwBUAVp+XWH7d19IoATEB2gIsbZNxf8UEDgABHKHENIekVEA/pIsT9IKvLmtNg1wyj6+mDEn9lR8aPulXNfiVRX7QddNSCDStZBEAAUnOvTnPzgzrbYnxoasnrLNu/oRJXkFgy/fUsDB6rqU69d1vkLqVPzjANCv+0esOAQXCekYdN3HRAgFIAQo7FRft1H86/2igYBajhdBVsC5Vp0zJae1TwGhysZUx9q9RnCEEL/rWw9o9yy7/K7Bnv6rAiLSJSLqI8bXnlYJicec620zMwoyoheduDUQoB1OkcNTFqRXJ2vNV7WGA19aG0gZjpgXVZwApfVpbZ8L86uaKozQxt204lsQsu6gLy7uVqCFIjACkF0qE/st0tMa6cKIgNKN7YkxjPoCAOSAIW0D5rCA0ZP3fwGTxHDdibM0IwAAAABJRU5ErkJggg==
// @run-at       document-end
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// @grant        GM_addStyle
// @grant        GM_openInTab
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @require      https://cdn.jsdelivr.net/npm/idb@7/build/umd.js
// @require      https://greasyfork.org/scripts/428487-gif-encoder/code/gif-encoder.js?version=1028787
// @require      https://greasyfork.org/scripts/428486-neu-quant/code/neu-quant.js?version=1028788
// @require      https://greasyfork.org/scripts/428485-lzw-encoder/code/lzw-encoder.js?version=1028790
// @connect      tweeterid.com
// @connect      codeofaninja.com
// @connect      img-org.poipiku.com

// ==/UserScript==

// idb: https://github.com/jakearchibald/idb
// jsgif (GIFEncoder): https://github.com/antimatter15/jsgif

(function () {
    'use strict';
    const $ = window.jQuery;

    var ForceDownload = false; // if true, will not re-download for media recorded in DB
    var HideDownloaded = false; // if true, will set already downloaded tiles to be display:none;
    var HideGetDownloadRecordCountMessage = true; // true, will not log to console for dbGetDownloadRecordCount()

    var poipikuUserDict = new Map();

    const IndexedDB = idb;
    const IndexedDBName = 'FADownloadDB';
    const IndexedDBVersion = 3;
    const IndexedDBKeyEnum = Object.freeze({
        ID: 'ID',
        // <SiteType>
        TwitterUserId: 'TwitterUserId',
        MediaId: 'MediaId',
        MediaType: 'MediaType',
        // <SiteType>User
        // TwitterUserId: 'TwitterUserId',
        TwitterUsername: 'TwitterUsername',
        SiteUserId: 'SiteUserId',
    });
    const IndexedDBIndexEnum = Object.freeze({
        // <SiteType>
        TwitterUserId: 'TwitterUserId',
        MediaId: 'MediaId',
        CompUserMediaIndex: 'CompUserMediaIndex', // [ IndexedDBKeyEnum.TwitterUserId, IndexedDBKeyEnum.MediaId ]
        CompMediaIndex: 'CompMediaIndex', // [ IndexedDBKeyEnum.MediaId, IndexedDBKeyEnum.MediaType ]
        CompAllIndex: 'CompAllIndex',
        // <SiteType>User
        // TwitterUserId: 'TwitterUserId',
        TwitterUsername: 'TwitterUsername',
        SiteUserId: 'SiteUserId',
    });
    const MediaTypeEnum = Object.freeze({
        Image: 'Image',
        Text: 'Text',
        Video: 'Video'
    });
    const SiteTypeEnum = Object.freeze({
        Twitter: 'Twitter',
        Poipiku: 'Poipiku',
        PoipikuImage: 'PoipikuImage',
        Privatter: 'Privatter',
        PrivatterImage: 'PrivatterImage'
    });
    const SiteType = (() => {
        if (window.location.origin === 'https://twitter.com') {
            return SiteTypeEnum.Twitter;
        }
        else if (window.location.origin === 'https://poipiku.com') {
            return SiteTypeEnum.Poipiku;
        }
        else if (window.location.origin === 'https://img-org.poipiku.com') {
            return SiteTypeEnum.PoipikuImage;
        }
        else if (window.location.origin === 'https://privatter.net') {
            return SiteTypeEnum.Privatter;
        }
        else if (window.location.origin === 'https://d2pqhom6oey9wx.cloudfront.net') {
            return SiteTypeEnum.PrivatterImage;
        }
    })();

    GM_addStyle('.fadMarkDownloaded {background-color:Gainsboro;}');
    GM_addStyle('.fad {font-size:15px;line-height:30px;font-family:Arial;font-weight:normal;position:fixed;top:30%;left:12%;width:300px;}');
    GM_addStyle('.fad__trigger {color:#ee1166;cursor:pointer;font-weight:bold;text-shadow:-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white}');
    GM_addStyle('.fad__panel {background-color:rgba(255,255,255,0.9);color:black;padding:5px;box-shadow:0px 0px 15px #fff;border:10px solid;border-image-slice:1;border-width:5px;border-image-source:linear-gradient(to bottom,#ff7722,white,#0077dd);}');
    GM_addStyle('.fad__panel div {margin:10px;}');
    GM_addStyle('.fad__panel.div .fad__panel div {margin-bottom:5px;}');
    GM_addStyle('.fad__panel label {font-weight:bold;display:inline}');
    GM_addStyle('.fad__header {display:flex;justify-content:space-between;align-items:flex-start;}');
    GM_addStyle('.fad__headerText {font-size:20px;font-weight:bold;margin-bottom:5px;color:#0077dd;}');
    GM_addStyle('.fad__download {background-color:#ee1166;cursor:pointer;padding:10px 5px;color:white;border-radius:4px;margin-top:5px;}');
    GM_addStyle('.fad__status {color:#ff7722}');
    GM_addStyle('.fad__twitterUserInfo {color:#0077dd}');
    GM_addStyle('.fad__addUserInfo {background-color:#ff7722;cursor:pointer;padding:10px 5px;color:white;border-radius:4px;}');
    GM_addStyle('.fad__addUserInfoSiteUserId, .fad__addUserInfoTwitterUsername, .fad__addUserInfoTwitterUserId {width:55px;}');
    GM_addStyle('.fad__exportDB {background-color:#0077dd;cursor:pointer;padding:10px 5px;color:white;border-radius:4px;}');
    GM_addStyle('.fad__importDB {background-color:#ff7722;cursor:pointer;padding:10px 5px;color:white;border-radius:4px;}');
    GM_addStyle('.fad__fileUploadImportDB {position:absolute !important;height:1px;width:1px;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);}');
    GM_addStyle('.fad__fileUploadImportDB:focus+label,fad__fileUploadImportDB:focus-within+label {outline: thin dotted;}');
    const TwitterDownloadIconHTML = '<g xmlns="http://www.w3.org/2000/svg" style="color:#0077dd;"><g transform="rotate(-180 11.999625205993652,9.00012493133545)"><path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"/></g><g><path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"/></g></g>'
    const TwitterMarkIconHTML = '<g xmlns="http://www.w3.org/2000/svg" style="color:#ff7722;"><g transform="rotate(0 11.999625205993652,9.00012493133545)"><path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"/></g><g><path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"/></g></g>'
    const TwitterModalSelector = 'div[aria-modal="true"]';

    $(document).ready(initialize);

    function initialize() {
        injectFADMediaDownloaderPanel();
        dbDeleteErrorRecords();

        if (isTwitter()) {
            $(document).on('DOMNodeInserted', twitterOnDOMNodeInserted);
            $(document).on({
                mouseenter: function (e) {
                    $(e.currentTarget).find('svg').prev().addClass('r-zv2cs0');
                    $(e.currentTarget).find('svg').prev().parent().parent().removeClass('r-111h2gw')
                    $(e.currentTarget).find('svg').prev().parent().parent().addClass('r-13gxpu9')
                },
                mouseleave: function (e) {
                    $(e.currentTarget).find('svg').prev().removeClass('r-zv2cs0');
                    $(e.currentTarget).find('svg').prev().parent().parent().addClass('r-111h2gw')
                    $(e.currentTarget).find('svg').prev().parent().parent().removeClass('r-13gxpu9')
                }
            }, ".fad-download-icon");

            $(".tweet").each(function () {
                twitterInjectDownloadButton(this);
            });
            $(".fad_ext_container").css("z-index", twitterGetMaximumZindex() + 1);
        }
        else if (isPoipiku()) {
            poipikuMarkDownloaded();
        }
        else if (isPoipikuImage() || isPrivatterImage()) {
            const twitterUserId = getParameterValueFromUrl('twitterUserId');
            const twitterUsername = getParameterValueFromUrl('twitterUsername');
            const imgSeriesId = getParameterValueFromUrl('imgSeriesId');
            const imgIndex = getParameterValueFromUrl('imgIndex');
            const imgExtension = getParameterValueFromUrl('imgExtension');
            downloadImageFromUrl(twitterUsername, twitterUserId, document.location.href, imgSeriesId, imgIndex, imgExtension)
        }
        else if (isPrivatter()) {
            privatterMarkDownloaded();
        }
    }//end initialize

    async function getTwitterUserInfo(siteUserId, twitterUsername) {
        let twitterUserId = null;

        const userRecord = await dbGetUserRecord(siteUserId);
        if (userRecord && userRecord.TwitterUserId !== 'error') {
            return userRecord; 
        }

        if (twitterUsername) {
            twitterUserId = await ajaxGetTwitterUserId(twitterUsername);
            logTwitterUserInfo(twitterUsername, twitterUserId);
        }
        if (!twitterUserId || twitterUserId === 'error') { // get from dict
            if (isPoipiku()) {
                twitterUsername = poipikuGetTwitterUsernameUsingDict();
            }
            twitterUserId = await ajaxGetTwitterUserId(twitterUsername);
            logTwitterUserInfo(twitterUsername, twitterUserId);
        }

        if (twitterUsername && twitterUserId && twitterUserId !== 'error') {
            dbPutUserRecord(siteUserId, twitterUserId, twitterUsername);
            logTwitterUserInfo(twitterUsername, twitterUserId);
            return {
                SiteUserId: siteUserId,
                TwitterUserId: twitterUserId,
                TwitterUsername: twitterUsername
            };
        }
        logError('Failed to get twitterUserInfo');
        return null;
    }//end getTwitterUserInfo

    //#region START HTML/Event Functions

    function injectFADMediaDownloaderPanel() {
        $('body').append('<div class="fad"></div>');
        $('.fad').append('<label class="fad__trigger">FAD</label>');
        $('.fad').append('<div class="fad__panel"></div>');

        const headerTextHTML = '<label class="fad__headerText">Fan Art Downloader</label>'
        const downloadHTML = '<label class="fad__download">DOWNLOAD</label>';
        $('.fad__panel').append('<div class="fad__header">'+headerTextHTML+'&nbsp;&nbsp;&nbsp;'+downloadHTML+'</div>');

        $('.fad__panel').append('<div class="fad__status"></div>');
        $('.fad__panel').append('<div class="fad__twitterUserInfo"></div>');

        const addUserInfoSiteUserIdHTML = '<input type="text" class="fad__addUserInfoSiteUserId" placeholder="SiteUserId" />';
        const addUserInfoTwitterUsernameHTML = '<input type="text" class="fad__addUserInfoTwitterUsername" placeholder="TUsername" />';
        const addUserInfoTwitterUserIdHTML = '<input type="text" class="fad__addUserInfoTwitterUserId" placeholder="TUserId" />';
        const addUserInfoHTML = '<label class="fad__addUserInfo">ADD</label>';
        $('.fad__panel').append('<div>'+ addUserInfoSiteUserIdHTML + addUserInfoTwitterUsernameHTML + addUserInfoTwitterUserIdHTML + '&nbsp;&nbsp;&nbsp;' + addUserInfoHTML + '</div>');
        
        $('.fad__panel').append('<div><label><input class="fad__forceDownload" type="checkbox" /> Force Download?</label></div>');
        $('.fad__panel').append('<div><label><input class="fad__hideDownloaded" type="checkbox" /> Hide Downloaded?</label></div>');
        
        const exportDBHTML = '<label class="fad__exportDB">EXPORT DB</label>';
        const importDBHTML = '<label class="fad__importDB" for="fad__fileUploadImportDB">IMPORT DB</label>';
        $('.fad__panel').append('<div>' + exportDBHTML + '&nbsp;&nbsp;&nbsp;' + importDBHTML + '</div>');
        $('.fad__panel').append('<input type="file" id="fad__fileUploadImportDB" class="fad__fileUploadImportDB" accept=".json">');
        
        $('.fad__trigger').click(expandCollapsePanel);
        $('.fad__download').click(downloadMedia);
        $('.fad__addUserInfo').click(addUserInfo);
        $('.fad__forceDownload').click(chkForceDownloadClicked);
        $('.fad__hideDownloaded').click(chkHideDownloadedClicked);
        $('.fad__exportDB').click(dbExport);
        $('.fad__fileUploadImportDB').change(fileUploadImportDBChanged);
        
        setStatusText_NeverDownloaded();
    }//end injectFADMediaDownloaderPanel

    function expandCollapsePanel() {
        if ($('.fad__panel').is(":visible")) {
            $('.fad__panel').hide();
        } else {
            $('.fad__panel').show();
        }
    }//end expandCollapsePanel

    function addUserInfo() {
        const siteUserId = $('.fad__addUserInfoSiteUserId').val();
        const twitterUsername = $('.fad__addUserInfoTwitterUsername').val();
        const twitterUserId = $('.fad__addUserInfoTwitterUserId').val();
        if (siteUserId && twitterUsername && twitterUserId) {
            log('Adding to User DB table: SiteUserId='+siteUserId+' twitterUsername='+twitterUsername+' twitterUserId='+twitterUserId)
            dbInsertUserRecord(siteUserId, twitterUserId, twitterUsername);
        }
    }//end addUserInfo

    function chkForceDownloadClicked() {
        ForceDownload = this.checked;
        log('ForceDownload changed to be: ' + ForceDownload);
    }//end chkForceDownloadClicked

    function chkHideDownloadedClicked() {
        HideDownloaded = this.checked;
        log('HideDownloaded changed to be: ' + HideDownloaded);
        if (HideDownloaded) { $('.fadMarkDownloaded').hide(); }
        else { $('.fadMarkDownloaded').show(); }
    }//end chkHideDownloadedClicked

    function fileUploadImportDBChanged() {
        if (this.files.length === 0) { logError('No file uploaded'); return; }
        const file = this.files[0];
        const reader = new FileReader();
        reader.onload = dbImport;
        reader.readAsText(file);
    }//end fileUploadImportDBChanged

    //#endregion END HTML/Event Functions

    //#region START Download Functions

    async function downloadMedia(event) {
        if (hasImages(event)) {
            await downloadImages(event);
        }
        if (hasTexts(event)) {
            await downloadTexts();
        }
        if (hasVideo(event)) {
            await downloadVideo(event);
        }
    }//end downloadMedia

    function hasImages(event) {
        if (isTwitter()) {
            const tweetSelector = event.data
            const tweet = $(event.currentTarget).closest(tweetSelector)
            let imageTags = tweet.find('img');

            if (tweetSelector === TwitterModalSelector && imageTags.length) {
                imageTags = $(imageTags[twitterGetIndexOfImage(tweetSelector)])
            }
            return imageTags.length;
        }
        return (isPoipiku() && poipikuGetImageUrls().length)
            || (isPrivatter() && privatterGetImageUrls().length);
    }//end hasImages

    function hasTexts(event) {
        return (isPoipiku() && $('a.IllustItemText').length)
            || (isPrivatter() && privatterGetMediaType() === 'p');
    }//end hasTexts

    function hasVideo(event) {
        if (isTwitter()) {
            const tweetSelector = event.data
            const tweet = $(event.currentTarget).closest(tweetSelector)
            const videoTag = tweet.find('video')[0];
            if (videoTag) { return true; }
        }
        return false;
    }//end hasVideo

    //#region START Download Image Functions

    async function downloadImages(event) {
        let siteUserId = null, twitterUsername = null, twitterUserId = null;
        let $twitterTweet = null, twitterTweetSelector = null;
        let imgUrls = [], imgSeriesId = null, imgTags = [];

        if (isTwitter()) {
            twitterTweetSelector = event.data;
            $twitterTweet = $(event.currentTarget).closest(twitterTweetSelector);
            twitterUsername = twitterGetTwitterUsername($twitterTweet, twitterTweetSelector);
            siteUserId = twitterUsername;
            imgUrls = twitterGetImageUrls($twitterTweet, twitterTweetSelector);
            imgSeriesId = twitterGetTweetId($twitterTweet, twitterTweetSelector);
            imgTags = twitterGetImageTags($twitterTweet, twitterTweetSelector);
        }
        else if (isPoipiku()) {
            twitterUsername = poipikuGetTwitterUsername();
            siteUserId = poipikuGetSiteUserId();
            imgUrls = poipikuGetImageUrls();
            imgSeriesId = poipikuGetImageSeriesId();
        }
        else if (isPrivatter()) {
            twitterUsername = privatterGetTwitterUsername();
            siteUserId = twitterUsername;
            imgUrls = privatterGetImageUrls();
            imgSeriesId = privatterGetImageSeriesId();
        }

        const twitterUserInfo = await getTwitterUserInfo(siteUserId, twitterUsername);
        if (!twitterUserInfo) { setStatusText_ErrorDownload(); return; }
        twitterUserId = twitterUserInfo.TwitterUserId;
        twitterUsername = twitterUserInfo.TwitterUsername;

        if (!ForceDownload) {
            const recordCount = await dbGetDownloadRecordCount(twitterUserId, imgSeriesId, MediaTypeEnum.Image);
            if (recordCount !== 0) { setStatusText_NotDownloaded(); return; }
        }

        setStatusText_StartDownload();

        for (let i = 0; i < imgUrls.length; i++) {
            let imgIndex = i;
            if (isTwitter()) {
                if (twitterTweetSelector === TwitterModalSelector) {
                    imgIndex = twitterGetIndexOfImage(twitterTweetSelector);
                } else {
                    const imgTag = imgTags[i];
                    imgIndex = parseInt(twitterGetTweetIndex($(imgTag).parents('a')[0].href))-1;
                }
            }
            await downloadImageFromUrl(twitterUsername, twitterUserId, imgUrls[i], imgSeriesId, imgIndex);
        }
        await dbInsertDownloadRecord(twitterUserId, imgSeriesId, MediaTypeEnum.Image);
        setStatusText_Downloaded();
        setTwitterUserInfo(twitterUserId, twitterUsername, imgSeriesId);

        if ($twitterTweet) {
            $twitterTweet.parent().addClass('fadMarkDownloaded');
            $twitterTweet.css('background-color', 'Gainsboro');
            if (HideDownloaded) { $twitterTweet.hide(); }
        }
    }//end downloadImages

    async function downloadImageFromUrl(twitterUsername, twitterUserId, url, imgSeriesId, imgIndex, imgExtension) {
        let headers = null;

        if (isTwitter()) {
            imgExtension = twitterGetImageExtension(url);
        }
        else if (isPoipiku()) {
            imgExtension = poipikuGetImageExtension(url);
            const urlParam = ['twitterUserId='+twitterUserId,'twitterUsername='+twitterUsername,'imgSeriesId='+imgSeriesId,'imgIndex='+imgIndex,'imgExtension='+imgExtension].join('&');
            GM_openInTab(url+'?'+urlParam);
            return;
        }
        else if (isPoipikuImage()) {
            const response = await poipikuGetImageData(url);
            url = response;
        }
        else if (isPrivatter()) {
            imgExtension = privatterGetImageExtension(url);
            const urlParam = ['twitterUserId='+twitterUserId,'twitterUsername='+twitterUsername,'imgSeriesId='+imgSeriesId,'imgIndex='+imgIndex,'imgExtension='+imgExtension].join('&');
            GM_openInTab(url+'?'+urlParam);
            return;
        }
        else if (isPrivatterImage()) {
            const response = await privatterGetImageData(url);
            url = response;
        }

        const fileName = getDownloadImageFileName(twitterUserId, twitterUsername, imgSeriesId, imgIndex, imgExtension);
        await gmDownload(url, fileName);
        await sleep(150);

        log('Downloaded fileName: ' + fileName);
    }//end downloadImageFromUrl

    //#endregion END Download Image Functions

    //#region START Download Text Functions

    async function downloadTexts() {
        let siteUserId = null, twitterUsername = null, twitterUserId = null;
        let textId = '', title = '', textContent = '';

        if (isPoipiku()) {
            twitterUsername = poipikuGetTwitterUsername();
            siteUserId = poipikuGetSiteUserId();
            textId = poipikuGetTextId();
            textContent = poipikuGetTextContent();
        }
        else if (isPrivatter()) {
            twitterUsername = privatterGetTwitterUsername();
            siteUserId = twitterUsername;
            textId = privatterGetTextId();
            title = privatterGetTextTitle();
            textContent = privatterGetTextContent();
        }

        const twitterUserInfo = await getTwitterUserInfo(siteUserId, twitterUsername);
        if (!twitterUserInfo) { setStatusText_ErrorDownload(); return; }
        twitterUserId = twitterUserInfo.TwitterUserId;
        twitterUsername = twitterUserInfo.TwitterUsername;

        if (!ForceDownload) {
            const recordCount = await dbGetDownloadRecordCount(twitterUserId, textId, MediaTypeEnum.Text);
            if (recordCount !== 0) { setStatusText_NotDownloaded(); return; }
        }

        setStatusText_StartDownload();

        const url = 'data:text/plain;charset=utf-8,' + encodeURIComponent(textContent);
        const fileName = getDownloadTextFileName(twitterUserId, twitterUsername, textId + title);
        await gmDownload(url, fileName);
        await dbInsertDownloadRecord(twitterUserId, textId, MediaTypeEnum.Text);
        await sleep(150);

        log('Downloaded fileName: ' + fileName);
        setStatusText_Downloaded();
        setTwitterUserInfo(twitterUserId, twitterUsername, textId);
    }//end downloadTexts

    //#endregion END Download Text Function

    //#region START Download Video Functions

    async function downloadVideo(event) {
        let siteUserId = null, twitterUsername = null, twitterUserId = null;
        let $twitterTweet = null, twitterTweetSelector = null;
        let videoId = null, videoUrl = null, videoExtension = null;

        if (isTwitter()) {
            twitterTweetSelector = event.data;
            $twitterTweet = $(event.currentTarget).closest(twitterTweetSelector);
            twitterUsername = twitterGetTwitterUsername($twitterTweet, twitterTweetSelector);
            siteUserId = twitterUsername;
            videoId = twitterGetTweetId($twitterTweet, twitterTweetSelector);
            const videoTag = $twitterTweet.find('video')[0];
            videoUrl = videoTag.src;
            if (!videoUrl) { videoUrl = $twitterTweet.find('source')[0].src }
        }

        const twitterUserInfo = await getTwitterUserInfo(siteUserId, twitterUsername);
        if (!twitterUserInfo) { setStatusText_ErrorDownload(); return; }
        twitterUserId = twitterUserInfo.TwitterUserId;
        twitterUsername = twitterUserInfo.TwitterUsername;

        await downloadVideoFromUrl(twitterUserInfo, videoId, videoUrl);
    }//end downloadVideo

    async function downloadVideoFromUrl(twitterUserInfo, videoId, videoUrl) {
        if (videoUrl.includes('blob')) { downloadBlobVideo(twitterUserInfo, videoId); }
        else if (videoUrl.includes('ext_tw_video')) { downloadMp4Video(twitterUserInfo, videoId, videoUrl); }
        else { 
            downloadGifVideo(twitterUserInfo, videoId, videoUrl);
            downloadMp4Video(twitterUserInfo, videoId, videoUrl);
        }
    }//end downloadVideoFromUrl

    async function downloadBlobVideo(twitterUserInfo, videoId) {
        const videoUrl = await twitterApiGetMp4Url(videoId);
        await downloadMp4Video(twitterUserInfo, videoId, videoUrl);
    }//end downloadBlobVideo

    async function downloadMp4Video(twitterUserInfo, videoId, videoUrl) {
        const twitterUserId = twitterUserInfo.TwitterUserId, twitterUsername = twitterUserInfo.TwitterUsername;
        const fileName = getDownloadMp4FileName(twitterUserId, twitterUsername, videoId);
        await gmDownload(videoUrl, fileName);
        await sleep(150);

        log('Downloaded fileName: ' + fileName);
        setStatusText_Downloaded();
        setTwitterUserInfo(twitterUserId, twitterUsername, videoId);
    }//end downloadMp4Video

    async function downloadGifVideo(twitterUserInfo, videoId, videoUrl) {
        const twitterUserId = twitterUserInfo.TwitterUserId, twitterUsername = twitterUserInfo.TwitterUsername;
        const gifEncoder = new GIFEncoder();
        let video = document.createElement('video');
        let canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');

        video.src = videoUrl;
        video.crossOrigin = "anonymous";
        video.playbackRate = 1;
        video.preload = "auto";
        video.innerHTML = '<source src="' + video.src + '" type="video/mp4 preload="metadata" />';

        video.oncanplaythrough = async function() {
            const width = video.videoWidth, height = video.videoHeight;
            canvas.width = width;
            canvas.height = height;
            context.fillStyle = 'rgb(255,255,255)';
            context.fillRect(0,0, width, height);

            gifEncoder.setQuality(10);
            gifEncoder.setRepeat(0);
            gifEncoder.setDelay(150);
		    gifEncoder.setSize(width, height);
            gifEncoder.start();

            let index = 0;
            video.play();
            while (!video.ended) {
                setStatusText_ConvertingGIF(index);
                context.drawImage(video, 0, 0, width, height);
                const imageData = context.getImageData(0, 0, width, height);
                gifEncoder.addFrame(imageData.data, true);
                index++;
                await sleep(5);
            }

            gifEncoder.finish();
            const gifBinary = gifEncoder.stream().getData();
            const url = 'data:image/gif;base64,'+encode64(gifBinary);
            const fileName = getDownloadGifFileName(twitterUserId, twitterUsername, videoId);
            await gmDownload(url, fileName);
            await sleep(150);

            log('Downloaded fileName: ' + fileName);
            setStatusText_Downloaded();
            setTwitterUserInfo(twitterUserId, twitterUsername, videoId);
        }
    }//end downloadGifVideo

    //#endregion END Download Video Functions

    //#endregion END Download Functions

    //#region START Twitter Helper Functions

    //#region START Twitter Injection Helper Functions

    function twitterInjectDownloadButton(target) {
        const tweet = $(target).closest('.tweet');
        console.dir(tweet);
        if (!twitterHasVideo(tweet)) { return; }
        if (twitterHasVideoDownloadButton(tweet)) { return; }

        const favIcon = $(tweet).find('div.ProfileTweet-action--favorite')[0];
        $(favIcon).after('<div class="ProfileTweet-action fad_download_action"><button class="ProfileTweet-actionButton u-textUserColorHover js-actionButton fad_js_download" type="button"><div class="IconContainer js-tooltip" data-original-title="Video Download"><span class="Icon Icon--medium fad_download_icon"></span><span class="u-hiddenVisually"></span></div></button></div>');
        $(favIcon).siblings(".fad_download_action").find('button.fad_js_download').click('.tweet', downloadMedia);
    }//end twitterInjectDownloadButton

    function twitterInjectAdditionalDownloadButtons(event) {
        const tweets = $(event.target).find('article');

        if (tweets.length) {
            tweets.each((index, element) => {
                twitterAnalyzeDom(element);
            })
        } else {
            twitterAnalyzeDom(event.target);
        }

        $(event.target).find('.AdaptiveMedia-video').each(function () {
            twitterInjectDownloadButton(this);
        });
    }//end twitterInjectAdditionalDownloadButtons

    async function twitterInjectReactModalDownloadButton($modal) {
        const tweetId = twitterGetTweetId($modal, TwitterModalSelector);
        if (tweetId) {
            const countInDB = await dbGetDownloadRecordCount(null, tweetId, null, IndexedDBIndexEnum.MediaId);
            if (countInDB !== 0) {
                $modal.parent().addClass('fadMarkDownloaded');
                if (HideDownloaded) { $modal.hide(); }
            }
        }

        if (!$modal.find('div[role="group"] div.fad-modal-download-icon').length) {
            const icon = $modal.find('div[role="group"] div:nth-child(4)');
            icon.after(icon.clone());
            icon.attr('class', icon.prev().attr('class'));

            const download = icon.next();
            download.addClass('fad-modal-download-icon');
            download.children('div:first-child').data('testid', 'download');
            download.children('div:first-child').attr('aria-label', 'Media Download');
            download.find('svg').html(TwitterDownloadIconHTML);
            download.click(TwitterModalSelector, downloadMedia);
        }
    }//end twitterInjectReactModalDownloadButton

    async function twitterInjectReactDownloadButton(target) {
        const tweet = $(target).closest('article');

        if (!tweet.length) {
            const modal = $(target).closest(TwitterModalSelector);
            twitterInjectReactModalDownloadButton(modal);
            return;
        }

        if (!tweet.find('div[role="group"] div.fad-download-icon').length) {
            const icon = tweet.find('div[role="group"] div:nth-child(4)');
            icon.after(icon.clone());
            icon.attr('class', icon.prev().attr('class'));

            const download = icon.next();
            download.addClass('fad-download-icon');
            download.children('div:first-child').data('testid', 'download');
            download.children('div:first-child').attr('aria-label', 'Media Download');
            download.find('svg').html(TwitterDownloadIconHTML);
            download.click('article', downloadMedia);
        }
    }//end twitterInjectReactDownloadButton

    async function twitterInjectReactModalMarkButton($modal) {
        const tweetId = twitterGetTweetId($modal, TwitterModalSelector);
        if (tweetId) {
            const countInDB = await dbGetDownloadRecordCount(null, tweetId, null, IndexedDBIndexEnum.MediaId);
            if (countInDB !== 0) {
                $modal.parent().addClass('fadMarkDownloaded');
                if (HideDownloaded) { $modal.hide(); }
            }
        }

        if (!$modal.find('div[role="group"] div.fad-modal-mark-icon').length) {
            const icon = $modal.find('div[role="group"] div:nth-child(4)');
            icon.after(icon.clone());
            icon.attr('class', icon.prev().attr('class'));

            const mark = icon.next();
            mark.addClass('fad-modal-mark-icon');
            mark.children('div:first-child').data('testid', 'mark');
            mark.children('div:first-child').attr('aria-label', 'Media Mark');
            mark.find('svg').html(TwitterMarkIconHTML);
            mark.click(TwitterModalSelector, twitterMarkDownload);
        }
    }//end twitterInjectReactModalMarkButton

    async function twitterInjectReactMarkButton(target) {
        const $tweet = $(target).closest('article');

        if (!$tweet.length) {
            const modal = $(target).closest(TwitterModalSelector);
            twitterInjectReactModalMarkButton(modal);
            return;
        }

        const tweetId = twitterGetTweetId($tweet, 'article');
        if (tweetId) {
            const countInDB = await dbGetDownloadRecordCount(null, tweetId, null, IndexedDBIndexEnum.MediaId);
            if (countInDB !== 0) {
                $tweet.parent().addClass('fadMarkDownloaded');
                if (HideDownloaded) { $tweet.hide(); }
            }
        }

        if (!$tweet.find('div[role="group"] div.fad-mark-icon').length) {
            const icon = $tweet.find('div[role="group"] div:nth-child(4)');
            icon.after(icon.clone());
            icon.attr('class', icon.prev().attr('class'));

            const mark = icon.next();
            mark.addClass('fad-mark-icon');
            mark.children('div:first-child').data('testid', 'mark');
            mark.children('div:first-child').attr('aria-label', 'Media Mark');
            mark.find('svg').html(TwitterMarkIconHTML);
            mark.click('article', twitterMarkDownload);
        }
    }//end twitterInjectReactMarkButton

    function twitterAnalyzeDom(content) {
        if (twitterHasMedia(content)) {
            twitterInjectReactDownloadButton(content);
        }
        twitterInjectReactMarkButton(content);
    }//end twitterAnalyzeDom

    function twitterHasMedia(element) {
        const isImage = element.outerHTML.includes('pbs.twimg.com/media')
        const isVideo = $(element).html().includes('video')
        return isImage || isVideo;
    }//end twitterHasMedia

    function twitterHasVideo(target) {
        return $(target).find('.AdaptiveMedia-video')[0];
    }//end twitterHasVideo

    function twitterHasVideoDownloadButton(target) {
        return $(target).find('button.fad_js_download')[0];
    }//end twitterHasVideoDownloadButton

    //#endregion END Twitter Injection Helper Functions

    function twitterOnDOMNodeInserted(event) {
        twitterGetCurrentUserInfo();
        twitterInjectAdditionalDownloadButtons(event);
    }

    function twitterGetImageTags(tweet, tweetSelector) {
        let imageTags = [];
        let imgs = tweet.find('img');
        if (tweetSelector === TwitterModalSelector && imgs.length) {
            imgs = $(imgs[twitterGetIndexOfImage(tweetSelector)]);
        }
        for (let i = 0; i < imgs.length; i++) {
            let imgTag = imgs[i]
            let url = $(imgTag).attr('src');
            if (/(https:\/\/pbs.twimg.com\/media\/.*)$/g.test(url)) {
                imageTags.push(imgTag);
            }
        }
        return imageTags;
    }//end twitterGetImageTags

    function twitterGetImageUrls(tweet, tweetSelector) {
        let imgUrls = [];
        const imageTags = twitterGetImageTags(tweet, tweetSelector);
        for (let i = 0; i < imageTags.length; i++) {
            let imgTag = imageTags[i]
            let url = $(imgTag).attr('src');
            if (/(https:\/\/pbs.twimg.com\/media\/.*)$/g.test(url)) {
                const regex = /(name=)(.*)(\&?.*)/g;
                if (regex.test(url)) { url = url.replace(regex, '$1orig$3'); }
                else if (url.includes('=')) { url = url + '&name=orig'; }
                else { url = url + '?name=orig'; }
                imgUrls.push(url);
            }
        }
        return imgUrls;
    }//end twitterGetImageUrls

    function twitterGetTwitterUsername(tweet, tweetSelector) {
        const re = /(?:https:\/\/[A-z.]*\/(\w*)\/status\/)(?:\d*)(?:\/?\w*)/g;
        return twitterGetTweetData(tweet, tweetSelector, re);
    }//end twitterGetTwitterUsername

    function twitterGetTweetId(tweet, tweetSelector) {
        const re = /(?:https:\/\/[A-z.]*\/\w*\/status\/)(\d*)(?:\/?\w*)/g;
        return twitterGetTweetData(tweet, tweetSelector, re);
    }//end twitterGetTweetId

    function twitterGetImageExtension(url) {
        const regex = /(?:\?|\&)format\=([^&]+)/g;
        const match = regex.exec(url);
        return match[1];
    }//end twitterGetImageExtension

    function twitterGetTweetData(tweet, tweetSelector, re) {
        if (tweetSelector === '.tweet') {
            return tweet.data("tweet-id")
        } else if (tweetSelector === 'article') {
            for (const element of tweet.find('a').toArray()) {
                const match = re.exec(element.href)
                if (match) {
                    return match[1];
                }
            }
        } else if (tweetSelector === TwitterModalSelector) {
            const match = re.exec(window.location.href)
            if (match) {
                return match[1];
            }
        }
    }//end twitterGetTweetData

    function twitterGetIndexOfImage(tweetSelector) {
        if (tweetSelector !== TwitterModalSelector) { return; }
        const splited = window.location.pathname.split('/')
        return Number(splited[splited.length - 1]) - 1
    }//end twitterGetIndexOfImage

    function twitterGetTweetIndex(statusUrl) {
        const re = /(?:https:\/\/[A-z.]*\/\w*\/status\/)(?:\d*\/?\w*\/)(\d)/g;
        const match = re.exec(statusUrl)
        if (match) { return match[1]; }
        return 0;
    }//end twitterGetTweetIndex

    function twitterGetMaximumZindex() {
        function intOrNaN(x) {
            return /^\d+$/.test(x) ? +x : NaN;
        }
        let maxZ = 0;
        $('div').each((element, index) => {
            try {
                var indexCurrent = intOrNaN($(element).css("z-index"));
                if (indexCurrent > maxZ) {
                    maxZ = indexCurrent;
                }
            } catch { }
        });
        return maxZ;
    }//end twitterGetMaximumZindex

    async function twitterMarkDownload(event) {
        const twitterTweetSelector = event.data;
        const $twitterTweet = $(event.currentTarget).closest(twitterTweetSelector);
        const twitterUsername = twitterGetTwitterUsername($twitterTweet, twitterTweetSelector);
        const twitterUserInfo = await getTwitterUserInfo(twitterUsername, twitterUsername);
        if (!twitterUserInfo) { setStatusText_ErrorDownload(); return; }
        const twitterUserId = twitterUserInfo.TwitterUserId;
        const tweetId = twitterGetTweetId($twitterTweet, twitterTweetSelector);
        await dbInsertDownloadRecord(twitterUserId, tweetId, MediaTypeEnum.Image);
        if ($twitterTweet) {
            $twitterTweet.parent().addClass('fadMarkDownloaded');
            if (HideDownloaded) { $twitterTweet.hide(); }
        }
    }//end twitterMarkDownload

    async function ajaxGetTwitterUserId(username) {
        let userId = null;
        try {
            let apiResponse = await twitterApiGetUserInfo(username);
            if (apiResponse && apiResponse.length > 0) {
                userId = apiResponse[0].id_str;
            } else { 
                throw 'Failed to get users/lookup info from Twitter API.';
            }
        } catch (error) {
            logError(error);
            try {
                let htmlResponse = await ajaxGetTwitterUserIdUsingCodeofaninjaApi(username);
                let regex = /Twitter Numeric ID: (\d+)/;
                let match = regex.exec(htmlResponse);
                userId = match[1];
            } catch (error) {
                logError(error);
                userId = await ajaxGetTwitterUserIdUsingTweeteridApi(username);
            }
        }
        if (userId === 'error') {
            logError('Failed to retrieve twitterUserId!');
            userId = null;
        }
        return userId;
    }//end ajaxGetTwitterUserId

    function ajaxGetTwitterUserIdUsingTweeteridApi(username) {
        return gmPost('https://tweeterid.com/ajax.php', 'input=' + username);
    }//end ajaxGetTwitterUserIdUsingTweeteridApi

    function ajaxGetTwitterUserIdUsingCodeofaninjaApi(username) {
        return gmPost('https://codeofaninja.com/tools/find-twitter-id/find-twitter-id-answer.php', 'username=' + username);
    }//end ajaxGetTwitterUserIdUsingCodeofaninjaApi

    function twitterApiGetMp4Url(tweetId) {
        const url = "https://api.twitter.com/1.1/statuses/show.json?include_profile_interstitial_type=1&include_blocking=1&include_blocked_by=1&include_followed_by=1&include_want_retweets=1&include_mute_edge=1&include_can_dm=1&skip_status=1&cards_platform=Web-12&include_cards=1&include_ext_alt_text=true&include_reply_count=1&tweet_mode=extended&trim_user=false&include_ext_media_color=true&id="
            + tweetId;
        const token = getCookie("ct0");
        return new Promise((resolve, reject) => {
            var init = {
                origin: 'https://mobile.twitter.com',
                headers: {
                    "Accept": '*/*',
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:62.0) Gecko/20100101 Firefox/62.0",
                    "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
                    "x-csrf-token": token,
                },
                credentials: 'include',
                referrer: 'https://mobile.twitter.com'
            };
            fetch(url, init)
                .then((response) => {
                    if (response.status == 200) {
                        response.json().then((json) => {
                            let mp4Variants = json.extended_entities.media[0].video_info.variants.filter(variant => variant.content_type === 'video/mp4')
                            mp4Variants = mp4Variants.sort((a, b) => (b.bitrate - a.bitrate))
                            let url = '';
                            if (mp4Variants.length) { url = mp4Variants[0].url }
                            resolve(url);
                        })
                    } else {
                        reject({
                            status: response.status,
                            statusText: response.statusText
                        });
                    }
                })
                .catch((err) => {
                    logError(err);
                    reject({ error: err });
                });
        });
    }//end twitterApiGetMp4Url

    function twitterApiGetUserInfo(twitterUsername) {
        const url = "https://api.twitter.com/1.1/users/lookup.json?screen_name="
            + twitterUsername;
        const token = getCookie("ct0");
        return new Promise((resolve, reject) => {
            var init = {
                origin: 'https://mobile.twitter.com',
                headers: {
                    "Accept": '*/*',
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:62.0) Gecko/20100101 Firefox/62.0",
                    "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
                    "x-csrf-token": token,
                },
                credentials: 'include',
                referrer: 'https://mobile.twitter.com'
            };
            fetch(url, init)
                .then((response) => {
                    if (response.status == 200) {
                        response.json().then((json) => {
                            resolve(json);
                        })
                    } else {
                        logError(response);
                        reject({
                            status: response.status,
                            statusText: response.statusText
                        });
                    }
                })
                .catch((err) => {
                    logError(err);
                    reject({ error: err });
                });
        });
    }//end twitterApiGetUserInfo

    async function twitterGetCurrentUserInfo() {
        if (window.location.href.indexOf('likes') !== -1 || window.location.href.indexOf('search') !== -1) { return; }
        const divUsername = document.querySelector('[data-testid="UserName"]');
        if (!divUsername) { return; }
        const spans = divUsername.querySelectorAll('span');
        if (!spans) { return; }
        const spanUsername = spans[spans.length-1];
        if (!spanUsername) { return; }
        const twitterUsername = spanUsername.innerText.substring(1);

        if ($('.fad__twitterUserInfo').html().indexOf(twitterUsername) !== -1) { return; }

        const twitterUserInfo = await getTwitterUserInfo(twitterUsername, twitterUsername);
        if (!twitterUserInfo) { return; }
        setTwitterUserInfo(twitterUserInfo.TwitterUserId, twitterUserInfo.TwitterUsername, "");
    }

    //#endregion END Twitter Helper Functions

    //#region START Poipiku Helper Functions

    function poipikuInjectDownloadButton() {
        $('header.Header').append('<button type="button" id="btnDownload">Download</button>');
        $('button[id="btnDownload"]').click(downloadMedia);

        // fix default max-width to display button properly
        $('div.HeaderWrapper').css('max-width', '1100px');
    }//end poipikuInjectDownloadButton

    function poipikuGetSiteUserId() {
        let $poipikuUsername = $('h2.UserInfoUserName a');
        if ($poipikuUsername.length === 0) {
            logError('Failed to find poipiku username on page');
            return null;
        }
        $poipikuUsername = $poipikuUsername[0];
        const regex = /\/(\d+)/;
        const match = regex.exec($poipikuUsername.href);
        return match[1];
    }//end poipikuGetSiteUserId

    function poipikuGetTwitterUsername() {
        let $twitterUsername = $('a.AutoLink[href*="twitter.com"]');

        // some provided actual twitter id link
        if ($twitterUsername.length !== 0) {
            $twitterUsername = $twitterUsername[0];
            const regex = /twitter\.com\/(.*)/;
            const match = regex.exec($twitterUsername.href);
            return match[1];
        }

        // get poipiku username
        else {
            log('Failed to find twitter username on page');

            let $poipikuUsername = $('h2.UserInfoUserName a');
            if ($poipikuUsername.length === 0) {
                logError('Failed to find poipiku username on page');
                return null;
            }
            $poipikuUsername = $poipikuUsername[0];

            if (/[a-zA-Z0-9_]/.test($poipikuUsername.innerHTML)) {
                // could be twitter username
                return $poipikuUsername.innerHTML;
            }

            // not a valid twitter name, get from dict
            return poipikuGetTwitterUsernameUsingDict();
        }
    }//end poipikuGetTwitterUsername

    function poipikuGetTwitterUsernameUsingDict() {
        const poipikuUserId = poipikuGetSiteUserId();
        const twitterUsername = poipikuUserDict.get(poipikuUserId);
        if (!twitterUsername) {
            logError('Failed to get twitter userId from poipikuUserDict');
        }
        return twitterUsername;
    }//end poipikuGetTwitterUserIdUsingDict

    function poipikuGetImageUrls() {
        let imgUrls = [];
        $('img.IllustItemThumbImg').each(function (i, img) {
            // https://img-cdn.poipiku.com/user_img01/002642890/004496676_MA2NxtaVA.png_640.jpg
            // //img.poipiku.com/user_img01/002332840/004709422_CnrNWGuec.png_640.jpg
            // //img.poipiku.com/user_img00/003377156/004997235_008643532_WSIYiUIff.png_640.jpg
            if (img.src.indexOf('img-cdn.poipiku.com/user_img') !== -1 || img.src.indexOf('img.poipiku.com/user_img') !== -1) {
                imgUrls.push(img.src.replace('_640.jpg', '').replace('img-cdn.poipiku.com', 'img-org.poipiku.com').replace('img.poipiku.com', 'img-org.poipiku.com'));
            }
        });
        return imgUrls;
    }//end poipikuGetImageUrls

    function poipikuGetImageSeriesId() {
        let match = null;
        // https://poipiku.com/2642890/4496676.html
        const regex1 = /poipiku\.com\/\d+\/(\d+)\./;
        // https://poipiku.com/IllustViewPcV.jsp?ID=2469199&TD=4274916
        const regex2 = /ID=\d+&TD=(\d+)/;
        if (regex1.test(window.location.href)) { match = regex1.exec(window.location.href); }
        else if (regex2.test(window.location.href)) { match = regex2.exec(window.location.href); }
        return match[1];
    }//end poipikuGetImageSeriesId

    function poipikuGetImageExtension(url) {
        // https://img-cdn.poipiku.com/user_img01/002642890/004496676_MA2NxtaVA.png
        const regex = /user_img\d+\/\d+\/.*\.(.*)/;
        const match = regex.exec(url);
        return match[1];
    }//end poipikuGetImageExtension

    function poipikuGetTextId() {
        let match = null;
        // https://poipiku.com/2243024/4497225.html
        const regex1 = /poipiku\.com\/\d+\/(\d+)\./;
        // https://poipiku.com/IllustViewPcV.jsp?ID=2469199&TD=4274916
        const regex2 = /ID=\d+&TD=(\d+)/;
        if (regex1.test(window.location.href)) { match = regex1.exec(window.location.href); }
        else if (regex2.test(window.location.href)) { match = regex2.exec(window.location.href); }

        return match[1];
    }//end poipikuGetTextId

    function poipikuGetTextContent() {
        const description = $('h1.IllustItemDesc').html().replaceAll('<br>', '\n');
        let textContent = $('span.IllustItemThumbText').html().replaceAll('<br>', '\n').replaceAll('<div class="NovelSection">', '').replaceAll('<span class="NovelTitle">', '').replaceAll('</span>', '');
        if (description && description !== '') {
            textContent = description + '\n\n\n----------\n\n\n' + textContent;
        }
        return textContent;
    }//end poipikuGetTextContent

    async function poipikuMarkDownloaded() {
        if (!/poipiku.com\/\d+/.test(window.location.href) && !/IllustListPcV/.test(window.location.href)) { return; }

        const twitterUsername = poipikuGetTwitterUsername();
        const siteUserId = poipikuGetSiteUserId();
        const twitterUserInfo = await getTwitterUserInfo(siteUserId, twitterUsername);
        if (!twitterUserInfo) { return; }
        const twitterUserId = twitterUserInfo.TwitterUserId;

        const $tiles = $('div.IllustThumb');
        for (let i = 0; i < $tiles.length; i++) {
            const $tile = $($tiles[i]);
            const infoLink = $tile.children('a.IllustInfo')[0].href;
            const mediaId = /ID=\d+&TD=(\d+)/.exec(infoLink)[1];

            const count = await dbGetDownloadRecordCount(twitterUserId, mediaId, null, IndexedDBIndexEnum.CompUserMediaIndex);
            if (count !== 0) {
                $tile.addClass('fadMarkDownloaded');
                if (HideDownloaded) { $tile.hide(); }
            }
        }
    }//end poipikuMarkDownloaded

    function poipikuGetImageData(url) {
        return new Promise((resolve, reject) => {
            var init = {
                origin: 'https://poipiku.com/',
                mode: 'no-cors',
                headers: {
                    'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
                    'Accept-Encoding': 'gzip, deflate, br',
                    'Accept-Language': 'en-CA,en;q=0.9,ja-JP;q=0.8,ja;q=0.7,zh-CN;q=0.6,zh;q=0.5,en-GB;q=0.4,en-US;q=0.3',
                    'Connection': 'keep-alive',
                    'Cookie': document.cookie,
                    'Host': 'img-org.poipiku.com',
                    'Referer': 'https://poipiku.com/',
                    'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
                    'sec-ch-ua-mobile': '?0',
                    'Sec-Fetch-Dest': 'image',
                    'Sec-Fetch-Mode': 'no-cors',
                    'Sec-Fetch-Site': 'same-site',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                },
                credentials: 'include',
                referrer: 'https://poipiku.com/'
            };
            fetch(url, init)
                .then((response) => {
                    if (response.status == 200) {
                        response.blob().then((blob) => {
                            var reader = new FileReader();
                            reader.readAsDataURL(blob); 
                            reader.onloadend = function() {
                                var base64data = reader.result;                
                                resolve(base64data);
                            }
                        });
                    } else {
                        reject({
                            status: response.status,
                            statusText: response.statusText
                        });
                    }
                })
                .catch((err) => {
                    logError(err);
                    reject({ error: err });
                });
        });
    }//end poipikuGetImageData

    //#endregion END Poipiku Helper Functions

    //#region START Privatter Helper Functions

    function privatterInjectDownloadButton() {
        $('div.navbar-header').append('<button type="button" id="btnDownload" class="btn btn-default">Download</button>');
        $('button[id="btnDownload"]').click(downloadMedia);
    }//end privatterInjectDownloadButton

    function privatterGetTwitterUsername() {
        let $twitterUsername = $('a[href*="twitter.com"].pull-right');
        if ($twitterUsername.length === 0) {
            logError('Failed to find twitter username on page');
        }
        $twitterUsername = $twitterUsername[0];
        let regex = /twitter\.com\/(.*)/;
        let match = regex.exec($twitterUsername.href);
        return match[1];
    }//end privatterGetTwitterUsername

    function privatterGetMediaType() {
        return /privatter\.net\/(\w)/.exec(window.location.href)[1];
    }//end privatterGetMediaType

    function privatterGetImageUrls() {
        let imgUrls = [];
        $('img[src*="cloudfront"]').each(function (i, img) {
            // https://d2pqhom6oey9wx.cloudfront.net/img_resize/758192460afae2e78852.png
            imgUrls.push(img.src.replace('img_resize', 'img_original'));
        });
        return imgUrls;
    }//end privatterGetImageUrls

    function privatterGetImageSeriesId() {
        // https://privatter.net/i/5931960
        const regex = /privatter\.net\/\w\/(\d+)/;
        const match = regex.exec(window.location.href);
        return match[1];
    }//end privatterGetImageSeriesId

    function privatterGetImageExtension(url) {
        // https://d2pqhom6oey9wx.cloudfront.net/img_original/758192460afae2e78852.png
        const regex = /img_original\/.*\.(.*)/;
        const match = regex.exec(url);
        return match[1];
    }//end privatterGetImageExtension

    function privatterGetTextId() {
        // https://privatter.net/i/5931960
        const regex = /privatter\.net\/\w\/(\d+)/;
        const match = regex.exec(window.location.href);
        return match[1];
    }//end privatterGetTextId

    function privatterGetTextTitle() {
        let title = '';
        if ($('h1.lead').length && $('h1.lead').text() && $('h1.lead').text() !== '') {
            title = '-' + $('h1.lead').text();
        }
        return title;
    }//end privatterGetTextTitle

    function privatterGetTextContent() {
        let text = '';
        $('div#evernote').find('p').each(function (i, $p) {
            if ($p.innerHTML && $p.innerHTML !== '') {
                text += $p.innerHTML.replaceAll('<br>', '\n') + '\n\n\n----------\n\n\n';
            }
        });
        const regex = /<\/?span.*/g;
        if (regex.test(text)) { text = text.replace(regex, ''); }
        return text;
    }//end privatterGetTextContent

    async function privatterMarkDownloaded() {
        if (!/privatter.net\/u\//.test(window.location.href)) { return; }

        const twitterUsername = privatterGetTwitterUsername();
        const siteUserId = twitterUsername;
        const twitterUserInfo = await getTwitterUserInfo(siteUserId, twitterUsername);
        if (!twitterUserInfo) { return; }
        const twitterUserId = twitterUserInfo.TwitterUserId;

        const $links = $('.tab-pane.active a');
        for (let i = 0; i < $links.length; i++) {
            const $link = $($links[i]);
            const match = /\/(\w)\/(\d+)/.exec($links[i].href);
            const mediaType = match[1] === 'p' ? MediaTypeEnum.Text : MediaTypeEnum.Image;
            const mediaId = match[2];
            const count = await dbGetDownloadRecordCount(twitterUserId, mediaId, mediaType);
            if (count !== 0) {
                $link.css('display', 'inline-block');
                $link.css('width', '100%');
                $link.addClass('fadMarkDownloaded');
                if (HideDownloaded) { $link.hide(); }
            }
        }
    }//end privatterMarkDownloaded

    function privatterGetImageData(url) {
        url = document.location.origin + document.location.pathname;
        return new Promise((resolve, reject) => {
            var init = {
                // origin: 'https://privatter.net/',
                mode: 'no-cors',
                headers: {
                    'Host': 'd2pqhom6oey9wx.cloudfront.net',
                    'Connection': 'keep-alive',
                    'Cache-Control': 'max-age=0',
                    'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
                    'sec-ch-ua-mobile': '?0',
                    'Upgrade-Insecure-Requests': '1',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                    'Sec-Fetch-Site': 'cross-site',
                    'Sec-Fetch-Mode': 'navigate',
                    'Sec-Fetch-User': '?1',
                    'Sec-Fetch-Dest': 'document',
                    'Referer': 'https://privatter.net/',
                    'Accept-Encoding': 'gzip, deflate, br',
                    'Accept-Language': 'en-CA,en;q=0.9,ja-JP;q=0.8,ja;q=0.7,zh-CN;q=0.6,zh;q=0.5,en-GB;q=0.4,en-US;q=0.3',
                    'Cookie': document.cookie,

                },
                credentials: 'include',
                referrer: 'https://privatter.net/'
            };
            fetch(url, init)
                .then((response) => {
                    log(response);
                    if (response.status == 200) {
                        response.blob().then((blob) => {
                            var reader = new FileReader();
                            reader.readAsDataURL(blob); 
                            reader.onloadend = function() {
                                var base64data = reader.result;
                                log(base64data);             
                                resolve(base64data);
                            }
                        });
                    } else {
                        reject({
                            status: response.status,
                            statusText: response.statusText
                        });
                    }
                })
                .catch((err) => {
                    logError(err);
                    reject({ error: err });
                });
        });
    }//end privatterGetImageData

    //#endregion END Privatter Helper Functions

    //#region START Web Method Helper Functions

    function gmGet(address, headers, anonymous) {
        log('GET address: ' + getShortUrl(address));
        return new Promise((resolve, reject) => {
            if (!headers) { headers = "" }
            anonymous = anonymous ? anonymous : false;
            GM_xmlhttpRequest({
                method: "GET",
                url: address,
                headers: headers,
                anonymous: anonymous,
                onload: e => resolve(e.response),
                onerror: e => { logError(e); reject(e.response); },
                ontimeout: reject,
            });
        });
    }//end gmGet

    function gmPost(address, postData, headers, anonymous) {
        log('POST address: ' + getShortUrl(address) + ' postData: ' + JSON.stringify(postData));
        return new Promise((resolve, reject) => {
            if (!headers) { headers = { "Content-Type": "application/x-www-form-urlencoded" } }
            anonymous = anonymous ? anonymous : false;
            GM_xmlhttpRequest({
                method: "POST",
                url: address,
                headers: headers,
                data: postData,
                anonymous: anonymous,
                onload: e => resolve(e.response),
                onerror: e => { logError(e); reject(e.response); },
                ontimeout: reject,
            });
        });
    }//end gmPost

    function gmDownload(url, name, headers) {
        log('Downloading url: ' + getShortUrl(url) + ' name: ' + name);
        let options = {
            url: url,
            name: name,
            saveAs: false,
        };
        if (headers) { options.headers = headers; }
        return new Promise((resolve, reject) => {
            options.onerror = e => { logError(e); reject(e.response); };
            options.onload = resolve;
            GM_download(options);
        });
    }//end gmDownload

    //#endregion END Web Method Helper Functions

    //#region START IndexedDB Functions

    async function dbGetDB() {
        return await IndexedDB.openDB(IndexedDBName, IndexedDBVersion, {
            upgrade(db, oldVersion, newVersion, transaction) {
                if (oldVersion < 1) {
                    db.createObjectStore(SiteTypeEnum.Twitter, {
                        keyPath: [IndexedDBKeyEnum.TwitterUserId, IndexedDBKeyEnum.MediaId, IndexedDBKeyEnum.MediaType]
                    });
                    db.createObjectStore(SiteTypeEnum.Poipiku, {
                        keyPath: [IndexedDBKeyEnum.TwitterUserId, IndexedDBKeyEnum.MediaId, IndexedDBKeyEnum.MediaType]
                    });
                    db.createObjectStore(SiteTypeEnum.Privatter, {
                        keyPath: [IndexedDBKeyEnum.TwitterUserId, IndexedDBKeyEnum.MediaId, IndexedDBKeyEnum.MediaType]
                    });
                }
                if (oldVersion < 2) {
                    db.deleteObjectStore(SiteTypeEnum.Twitter);
                    db.deleteObjectStore(SiteTypeEnum.Poipiku);
                    db.deleteObjectStore(SiteTypeEnum.Privatter);

                    const store = db.createObjectStore(SiteType, { keyPath: 'ID', autoIncrement: true });
                    store.createIndex(IndexedDBIndexEnum.TwitterUserId, IndexedDBKeyEnum.TwitterUserId, { unique: false });
                    store.createIndex(IndexedDBIndexEnum.MediaId, IndexedDBKeyEnum.MediaId, { unique: false });
                    store.createIndex(IndexedDBIndexEnum.CompUserMediaIndex,
                        [IndexedDBKeyEnum.TwitterUserId, IndexedDBKeyEnum.MediaId], { unique: false });
                    store.createIndex(IndexedDBIndexEnum.CompMediaIndex,
                        [IndexedDBKeyEnum.MediaId, IndexedDBKeyEnum.MediaType], { unique: false });
                    store.createIndex(IndexedDBIndexEnum.CompAllIndex,
                        [IndexedDBKeyEnum.TwitterUserId, IndexedDBKeyEnum.MediaId, IndexedDBKeyEnum.MediaType], { unique: true });
                }
                if (oldVersion < 3) {
                    const store = db.createObjectStore(SiteType + 'User', { keyPath: 'ID', autoIncrement: true });
                    store.createIndex(IndexedDBIndexEnum.SiteUserId, IndexedDBKeyEnum.SiteUserId, { unique: true });
                    store.createIndex(IndexedDBIndexEnum.TwitterUserId, IndexedDBKeyEnum.TwitterUserId, { unique: false });
                    store.createIndex(IndexedDBIndexEnum.TwitterUsername, IndexedDBKeyEnum.TwitterUsername, { unique: false });
                }
            },
            terminated() {
                logError('DB ' + IndexedDBName + ' terminated unexpectedly');
            },
        });
    }//end dbGetDB

    async function dbClearStore(storeName) {
        log('Starting dbClearStore()...');

        const db = await dbGetDB();
        const tx = db.transaction(storeName, 'readwrite');
        await db.clear(storeName);
        await tx.done;
        db.close();

        log('Finished dbClearStore()');
    }//end dbClearStore

    async function dbDeleteErrorRecords() {
        log('Starting dbDeleteErrorRecords()...');

        const db = await dbGetDB();
        //await db.delete(SiteTypeEnum.Poipiku, ['error', '4274916', 'Image']);
        db.close();

        log('Finished dbDeleteErrorRecords()');
    }//end dbDeleteErrorRecords

    async function dbInsertDownloadRecord(twitterUserId, mediaId, mediaType) {
        const count = await dbGetDownloadRecordCount(twitterUserId, mediaId, mediaType);
        if (count !== 0) { return; }

        let param = [twitterUserId, mediaId, mediaType].join(',');
        log('Starting dbInsertDownloadRecord(' + param + ')...');

        let record = {};
        record[IndexedDBKeyEnum.TwitterUserId] = twitterUserId;
        record[IndexedDBKeyEnum.MediaId] = mediaId;
        record[IndexedDBKeyEnum.MediaType] = mediaType;

        const storeName = SiteType;
        const db = await dbGetDB();
        const tx = db.transaction(storeName, 'readwrite');
        await db.add(storeName, record);
        await tx.done;
        db.close();

        log('Finished dbInsertDownloadRecord(' + param + ')');
    }//end dbInsertDownloadRecord

    async function dbGetDownloadRecordCount(twitterUserId, mediaId, mediaType, indexName) {
        if (!indexName) { indexName = IndexedDBIndexEnum.CompAllIndex; }

        let param = [twitterUserId, mediaId, mediaType, indexName].join(',');
        if (!HideGetDownloadRecordCountMessage) {
            log('Starting dbGetDownloadRecordCount(' + param + ')...');
        }

        let key = null;
        switch (indexName) {
            case IndexedDBIndexEnum.TwitterUserId:
                key = twitterUserId;
                break;
            case IndexedDBIndexEnum.MediaId:
                key = mediaId;
                break;
            case IndexedDBIndexEnum.CompUserMediaIndex:
                key = [twitterUserId, mediaId];
                break;
            case IndexedDBIndexEnum.CompMediaIndex:
                key = [mediaId, mediaType];
                break;
            case IndexedDBIndexEnum.CompAllIndex:
            default:
                key = [twitterUserId, mediaId, mediaType];
                break;
        }

        const storeName = SiteType;
        const db = await dbGetDB();
        const tx = db.transaction(storeName, 'readwrite');
        const count = await db.countFromIndex(storeName, indexName, key);
        await tx.done;
        db.close();

        if (!HideGetDownloadRecordCountMessage) {
            log('Finished dbGetDownloadRecordCount(' + param + '): ' + count);
        }
        return count;
    }//end dbGetDownloadRecordCount

    async function dbInsertUserRecord(siteUserId, twitterUserId, twitterUsername) {
        const count = await dbGetUserRecord(siteUserId);
        if (count) { return; }

        let param = [siteUserId, twitterUserId, twitterUsername].join(',');
        log('Starting dbInsertUserRecord(' + param + ')...');

        let record = {};
        record[IndexedDBKeyEnum.SiteUserId] = siteUserId;
        record[IndexedDBKeyEnum.TwitterUserId] = twitterUserId;
        record[IndexedDBKeyEnum.TwitterUsername] = twitterUsername;

        const storeName = SiteType + 'User';
        const db = await dbGetDB();
        const tx = db.transaction(storeName, 'readwrite');
        await db.add(storeName, record);
        await tx.done;
        db.close();

        log('Finished dbInsertUserRecord(' + param + ')');
    }//end dbInsertUserRecord

    async function dbPutUserRecord(siteUserId, twitterUserId, twitterUsername) {
        const userRecord = await dbGetUserRecord(siteUserId, twitterUserId, twitterUsername);

        let param = [siteUserId, twitterUserId, twitterUsername].join(',');
        log('Starting dbPutUserRecord(' + param + ')...');

        let record = {};
        record[IndexedDBKeyEnum.SiteUserId] = siteUserId;
        record[IndexedDBKeyEnum.TwitterUserId] = twitterUserId;
        record[IndexedDBKeyEnum.TwitterUsername] = twitterUsername;
        if (userRecord) {
            record[IndexedDBKeyEnum.ID] = userRecord.ID;
        }

        const storeName = SiteType + 'User';
        const db = await dbGetDB();
        const tx = db.transaction(storeName, 'readwrite');
        await db.put(storeName, record);
        await tx.done;
        db.close();

        log('Finished dbPutUserRecord(' + param + ')');
    }//end dbPutUserRecord

    async function dbGetUserRecord(siteUserId, twitterUserId, twitterUsername, indexName) {
        if (!indexName) { indexName = IndexedDBIndexEnum.SiteUserId; }

        let param = [siteUserId, twitterUserId, twitterUsername, indexName].join(',');
        log('Starting dbGetUserRecord(' + param + ')...');

        let key = null;
        switch (indexName) {
            case IndexedDBIndexEnum.TwitterUserId:
                key = twitterUserId;
                break;
            case IndexedDBIndexEnum.TwitterUsername:
                key = twitterUsername;
                break;
            case IndexedDBIndexEnum.SiteUserId:
            default:
                key = siteUserId;
                break;
        }

        const storeName = SiteType + 'User';
        const db = await dbGetDB();
        const tx = db.transaction(storeName, 'readwrite');
        const record = await db.getFromIndex(storeName, indexName, key);
        await tx.done;
        db.close();

        log('Finished dbGetUserRecord(' + param + '): ' + !!record);
        return record;
    }//end dbGetUserRecord

    async function dbExport() {
        log('Starting dbExport()...');
        const storeName = SiteType;
        const db = await dbGetDB();

        let jsonExport = null;
        if (IndexedDBVersion === 1) {
            const allKeys = await db.getAllKeys(storeName);
            jsonExport = {
                DBStoreName: storeName,
                DBVersion: IndexedDBVersion,
                Keys: allKeys
            };
        } else {
            const allValues = await db.getAll(storeName);
            jsonExport = {
                DBStoreName: storeName,
                DBVersion: IndexedDBVersion,
                Values: allValues
            };
        }
        db.close();

        if (!jsonExport) {
            logError('Failed to create jsonExport');
            return;
        }

        const url = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(jsonExport, null, 2));
        const folderName = '###[FAD]###/Exports/';
        const fileName = [IndexedDBName, 'V'+IndexedDBVersion, storeName, getTimestampString()].join('-') + '.json';
        await gmDownload(url, folderName + fileName);
        await sleep(150);

        dbExportUser();
        log('Finished dbExport()');
    }//end dbExport

    async function dbExportUser() {
        if (IndexedDBVersion < 3) { return; }
        log('Starting dbExportUser()...');

        const storeName = SiteType + 'User';
        const db = await dbGetDB();
        const allValues = await db.getAll(storeName);
        db.close();

        const jsonExport = {
            DBStoreName: storeName,
            DBVersion: IndexedDBVersion,
            Values: allValues
        };

        if (!jsonExport) {
            logError('Failed to create jsonExport');
            return;
        }

        const url = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(jsonExport, null, 2));
        const folderName = '###[FAD]###/Exports/';
        const fileName = [IndexedDBName, 'V'+IndexedDBVersion, storeName, getTimestampString()].join('-') + '.json';
        await gmDownload(url, folderName + fileName);
        await sleep(150);
        log('Finished dbExportUser()');
    }//end dbExportUser

    async function dbImport(event) {
        const jsonImport = JSON.parse(event.target.result);
        const storeName = jsonImport.DBStoreName;
        const dbVersion = jsonImport.DBVersion;

        if (dbVersion === 1) {
            await dbClearStore(storeName);
            const allKeys = jsonImport.Keys;
            for (let i = 0; i < allKeys.length; i++) {
                const twitterUserId = allKeys[i][0];
                const mediaId = allKeys[i][1];
                const mediaType = allKeys[i][2];
                await dbInsertDownloadRecord(twitterUserId, mediaId, mediaType);
            }
        }
        else if (storeName.indexOf('User') !== 0) { // SiteUser store
            await dbClearStore(storeName);
            const allValues = jsonImport.Values;
            for (let i = 0; i < allValues.length; i++) {
                const twitterUserId = allValues[i][IndexedDBKeyEnum.TwitterUserId];
                const siteUserId = allValues[i][IndexedDBKeyEnum.SiteUserId];
                await dbInsertUserRecord(twitterUserId, siteUserId);
            }
        }
        else {
            await dbClearStore(storeName);
            const allValues = jsonImport.Values;
            for (let i = 0; i < allValues.length; i++) {
                const twitterUserId = allValues[i][IndexedDBKeyEnum.TwitterUserId];
                const mediaId = allValues[i][IndexedDBKeyEnum.MediaId];
                const mediaType = allValues[i][IndexedDBKeyEnum.MediaType];
                await dbInsertDownloadRecord(twitterUserId, mediaId, mediaType);
            }
        }
    }//end dbImport

    //#endregion END IndexedDB Functions

    //#region Utility Helper Functions

    function isTwitter() {
        return SiteType === SiteTypeEnum.Twitter;
    }//end isTwitter

    function isPoipiku() {
        return SiteType === SiteTypeEnum.Poipiku;
    }//end isPoipiku

    function isPoipikuImage() {
        return SiteType === SiteTypeEnum.PoipikuImage;
    }//end isPoipikuImage

    function isPrivatter() {
        return SiteType === SiteTypeEnum.Privatter;
    }//end isPrivatter

    function isPrivatterImage() {
        return SiteType === SiteTypeEnum.PrivatterImage;
    }//end isPrivatterImage

    function getValidWindowsFileName(name) {
        /*
         * < (less than)
         * > (greater than)
         * : (colon)
         * " (double quote)
         * / (forward slash)
         * \ (backslash)
         * | (vertical bar or pipe)
         * ? (question mark)
         * * (asterisk)
         */
        const regex1 = /[<>:"/\\|?*]/g;
        if (regex1.test(name)) { name = name.replace(regex1, ''); }
        const regex2 = /\s{2,}/g;
        if (regex2.test(name)) { name = name.replace(regex2, ' '); }
        return name;
    }//end getValidWindowsFileName

    function setStatusText(text) {
        $('.fad__status').html(text);
    }//end setStatusText

    function setStatusText_NeverDownloaded() {
        $('.fad__status').html('No Download status available.');
    }//end setStatusText_NeverDownloaded

    function setStatusText_StartDownload() {
        $('.fad__status').html('Start Downloading...');
    }//end setStatusText_StartDownload

    function setStatusText_NotDownloaded() {
        $('.fad__status').html('Not downloaded. <br>IndexedDB already has record. <br>Turn on Force Download if applicable.');
    }//end setStatusText_NotDownloaded

    function setStatusText_Downloaded() {
        $('.fad__status').html('Downloaded successfully!');
    }//end setStatusText_Downloaded

    function setStatusText_ErrorDownload() {
        $('.fad__status').html('Failed to download! <br>Check console for details.');
    }//end setStatusText_ErrorDownload

    function setStatusText_ConvertingGIF(index) {
        $('.fad__status').html('Converting GIF... ' + index);
    }//end setStatusText_ConvertingGIF

    function setTwitterUserInfo(twitterUserId, twitterUsername, tweetId) {
        const folderName = getValidWindowsFileName(twitterUserId + '-' + twitterUsername);
        const twitterUserInfoHtml = folderName + '<br>' + tweetId;
        $('.fad__twitterUserInfo').html(twitterUserInfoHtml);
        return folderName;
    }//end setTwitterUserInfo

    function logTwitterUserInfo(username, id) {
        log('twitterUsername: ' + username + ' twitterUserId: ' + id);
    }//end logTwitterUserInfo

    function log(obj) {
        console.dir(obj);
    }//end log

    function logError(msg) {
        console.error(msg);
    }//end logError

    function getShortUrl(url) {
        if (url.length > 80) {
            url = url.substring(0, 50) + '...' + url.substring(url.length - 20, url.length);
        }
        return url;
    }//end getShortUrl

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }//end sleep

    function getTimestampString() {
        let d = new Date();
        return [d.getFullYear(), (d.getMonth() + 1).padLeft(), d.getDate().padLeft()].join('') +
            '-' +
            [d.getHours().padLeft(), d.getMinutes().padLeft(), d.getSeconds().padLeft()].join('');
    }//end getTimestampString

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') { c = c.substring(1); }
            if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
        }
        return "";
    }//end getCookie

    function encode64(input) {
        var output = "", i = 0, l = input.length,
        key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", 
        chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        while (i < l) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) enc3 = enc4 = 64;
            else if (isNaN(chr3)) enc4 = 64;
            output = output + key.charAt(enc1) + key.charAt(enc2) + key.charAt(enc3) + key.charAt(enc4);
        }
        return output;
    }//end encode64

    function getParameterValueFromUrl(parameterName) {
        var result = null,
            tmp = [];
        location.search
            .substr(1)
            .split("&")
            .forEach(function (item) {
              tmp = item.split("=");
              if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
            });
        return result;
    }//end getParameterValueFromUrl

    function getDownloadImageFileName(twitterUserId, twitterUsername, imgSeriesId, imgIndex, imgExtension) {
        const folderName = getValidWindowsFileName(twitterUserId + '-' + twitterUsername);
        const fileName = getValidWindowsFileName(imgSeriesId + '-' + imgIndex + '.' + imgExtension);
        return '###[FAD]###/Twitter/Pictures/' + folderName + '/' + fileName;
    }//end getDownloadImageFileName

    function getDownloadTextFileName(twitterUserId, twitterUsername, textId) {
        const folderName = getValidWindowsFileName(twitterUserId + '-' + twitterUsername);
        const fielName = getValidWindowsFileName('[' + twitterUsername + '] ' + textId + '.txt');
        return '###[FAD]###/Twitter/Books/' + folderName + '/' + fielName;
    }//end getDownloadTextFileName

    function getDownloadMp4FileName(twitterUserId, twitterUsername, videoId) {
        const folderName = getValidWindowsFileName(twitterUserId + '-' + twitterUsername);
        const fileName = getValidWindowsFileName(videoId + '.mp4');
        return '###[FAD]###/Twitter/Videos/' + folderName + '/' + fileName;
    }//end getDownloadMp4FileName

    function getDownloadGifFileName(twitterUserId, twitterUsername, videoId) {
        const folderName = getValidWindowsFileName(twitterUserId + '-' + twitterUsername);
        const fileName = getValidWindowsFileName(videoId + '.gif');
        return '###[FAD]###/Twitter/Pictures/' + folderName + '/' + fileName;
    }//end getDownloadGifFileName

    Number.prototype.padLeft = function (base, chr) {
        var len = (String(base || 10).length - String(this).length) + 1;
        return len > 0 ? new Array(len).join(chr || '0') + this : this;
    }
    //#endregion Utility Helper Functions

})();