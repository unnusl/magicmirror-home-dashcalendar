/**********************************************************
 * MagicMirror Configuration Template
 *
 * This file is processed by setup-mirror.sh via envsubst.
 * All ${VAR_NAME} placeholders are filled in, comments stay.
 **********************************************************/

let config = {
  /********************************************************
   * Server / network
   ********************************************************/
  address: "localhost",
  port: 8080,
  basePath: "/",
  ipWhitelist: [
    "127.0.0.1",
    "::ffff:127.0.0.1",
    "::1"
  ],

  useHttps: false,
  httpsPrivateKey: "",
  httpsCertificate: "",

  /********************************************************
   * General display settings
   ********************************************************/
  language: "en",
  locale: "en-US",
  logLevel: ["INFO", "LOG", "WARN", "ERROR"],
  timeFormat: 12,
  units: "imperial",

  /********************************************************
   * Modules
   ********************************************************/
  modules: [

    /******************************************************
     * Remote control UI / API
     ******************************************************/
    {
      module: "MMM-Remote-Control",
      config: {
        showModuleApiMenu: false,
        customMenu: "custom_menu.json"
      }
    },

    /******************************************************
     * Clock (top-left)
     ******************************************************/
    {
      module: "clock",
      position: "top_left",
      config: {
        displaySeconds: false,
        showPeriodUpper: true
      }
    },

    /******************************************************
     * Base calendar (hidden, data source only)
     ******************************************************/
    {
      module: "calendar",
      header: "",
      config: {
        broadcastEvents: true,
        broadcastPastEvents: true,
        maximumEntries: 1000,
        calendars: [
          ${CALENDAR_BLOCK}
        ]
      }
    },

    /******************************************************
     * MMM-MonthlyCalendar (center)
     * CAL_VIEW_MODE: "currentMonth" or "4weeks"
     ******************************************************/
    {
      module: "MMM-MonthlyCalendar",
      position: "middle_center",
      config: {
        mode: "${CAL_VIEW_MODE}",
        displaySymbol: true,
        firstDayOfWeek: "sunday"
      }
    },

    /******************************************************
     * MMM-OneCallWeather (top-left under clock)
     ******************************************************/
    {
      module: "MMM-OneCallWeather",
      position: "top_left",
      classes: "leftWeather",
      header: "",
      config: {
        latitude: "${LATITUDE}",
        longitude: "${LONGITUDE}",
        apikey: "${OWM_API_KEY}",

        apiVersion: "3.0",
        units: "imperial",
        windUnits: "mph",

        showCurrent: true,
        showForecast: true,
        arrangement: "vertical",
        forecastLayout: "columns",
        roundTemp: true,
        tableClass: "small",
        colored: true
      }
    },

    /******************************************************
     * MMM-Wallpaper (bottom-left)
     ******************************************************/
    {
      module: "MMM-Wallpaper",
      position: "bottom_left",
      config: {
        source: "${WALLPAPER_SOURCE}",
        slideInterval: ${WALLPAPER_INTERVAL_MS},
        maximumEntries: 50,
        shuffle: true,
        crossfade: false,
        size: "contain",
        fillRegion: false,
        width: "350px",
        height: "350px",

        nasaApiKey: "${WALLPAPER_NASA_API_KEY}",
        flickrApiKey: "${WALLPAPER_FLICKR_API_KEY}",
        recurseLocalDirectories: ${WALLPAPER_RECURSE_LOCAL}
      }
    },

    /******************************************************
     * Optional: MMM-Traffic
     ******************************************************/
    ${MODULE_TRAFFIC_BLOCK}

    /******************************************************
     * Optional: MMM-PresenceScreenControl
     ******************************************************/
    ${PSC_MODULE_BLOCK}

    /******************************************************
     * Optional: MMM-HomeAssistant
     ******************************************************/
    ${MODULE_HA_BLOCK}

  ]
};

if (typeof module !== "undefined") {
  module.exports = config;
}
