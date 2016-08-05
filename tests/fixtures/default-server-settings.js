'use strict';

module.exports = {
  name: 'Nightscout'
  , version: '0.8.0'
  , apiEnabled: true
  , careportalEnabled: true
  , head: 'ae71dca'
  , settings: {
    units: 'mg/dl'
    , timeFormat: 12
    , nightMode: false
    , showRawbg: 'noise'
    , customTitle: 'Test Title'
    , theme: 'colors'
    , alarmUrgentHigh: true
    , alarmHigh: true
    , alarmLow: true
    , alarmUrgentLow: true
    , alarmTimeagoWarn: true
    , alarmTimeagoWarnMins: 15
    , alarmTimeagoUrgent: true
    , alarmTimeagoUrgentMins: 30
    , language: 'en'
    , enable: 'iob rawbg careportal delta direction upbat errorcodes'
    , showPlugins: 'iob'
    , alarmTypes: 'predict'
    , thresholds: {
      bgHigh: 250
      , bgTargetTop: 152
      , bgTargetBottom: 102
      , bgLow: 80
    }
    , extendedSettings: { }
  }
};