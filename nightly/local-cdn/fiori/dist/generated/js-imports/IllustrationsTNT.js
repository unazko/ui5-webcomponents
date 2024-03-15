// @ts-nocheck
import { registerIllustrationLoader } from "@ui5/webcomponents-base/dist/asset-registries/Illustrations.js";
export const loadIllustration = async (illustrationName) => {
    const collectionAndPrefix = "tnt/V4/";
    const cleanIllustrationName = illustrationName.startsWith(collectionAndPrefix) ? illustrationName.replace(collectionAndPrefix, "") : illustrationName;
    switch (cleanIllustrationName) {
        case "Avatar": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-avatar" */ "../../illustrations/tnt/Avatar.js")).default;
        case "Calculator": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-calculator" */ "../../illustrations/tnt/Calculator.js")).default;
        case "ChartArea": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-chartarea" */ "../../illustrations/tnt/ChartArea.js")).default;
        case "ChartArea2": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-chartarea2" */ "../../illustrations/tnt/ChartArea2.js")).default;
        case "ChartBPMNFlow": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-chartbpmnflow" */ "../../illustrations/tnt/ChartBPMNFlow.js")).default;
        case "ChartBar": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-chartbar" */ "../../illustrations/tnt/ChartBar.js")).default;
        case "ChartBullet": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-chartbullet" */ "../../illustrations/tnt/ChartBullet.js")).default;
        case "ChartDoughnut": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-chartdoughnut" */ "../../illustrations/tnt/ChartDoughnut.js")).default;
        case "ChartFlow": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-chartflow" */ "../../illustrations/tnt/ChartFlow.js")).default;
        case "ChartGantt": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-chartgantt" */ "../../illustrations/tnt/ChartGantt.js")).default;
        case "ChartOrg": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-chartorg" */ "../../illustrations/tnt/ChartOrg.js")).default;
        case "ChartPie": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-chartpie" */ "../../illustrations/tnt/ChartPie.js")).default;
        case "CodePlaceholder": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-codeplaceholder" */ "../../illustrations/tnt/CodePlaceholder.js")).default;
        case "Company": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-company" */ "../../illustrations/tnt/Company.js")).default;
        case "Compass": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-compass" */ "../../illustrations/tnt/Compass.js")).default;
        case "Components": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-components" */ "../../illustrations/tnt/Components.js")).default;
        case "Dialog": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-dialog" */ "../../illustrations/tnt/Dialog.js")).default;
        case "ExternalLink": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-externallink" */ "../../illustrations/tnt/ExternalLink.js")).default;
        case "FaceID": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-faceid" */ "../../illustrations/tnt/FaceID.js")).default;
        case "Fingerprint": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-fingerprint" */ "../../illustrations/tnt/Fingerprint.js")).default;
        case "Handshake": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-handshake" */ "../../illustrations/tnt/Handshake.js")).default;
        case "Help": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-help" */ "../../illustrations/tnt/Help.js")).default;
        case "Lock": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-lock" */ "../../illustrations/tnt/Lock.js")).default;
        case "Mission": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-mission" */ "../../illustrations/tnt/Mission.js")).default;
        case "MissionFailed": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-missionfailed" */ "../../illustrations/tnt/MissionFailed.js")).default;
        case "NoApplications": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-noapplications" */ "../../illustrations/tnt/NoApplications.js")).default;
        case "NoFlows": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-noflows" */ "../../illustrations/tnt/NoFlows.js")).default;
        case "NoUsers": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-nousers" */ "../../illustrations/tnt/NoUsers.js")).default;
        case "Radar": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-radar" */ "../../illustrations/tnt/Radar.js")).default;
        case "RoadMap": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-roadmap" */ "../../illustrations/tnt/RoadMap.js")).default;
        case "Secrets": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-secrets" */ "../../illustrations/tnt/Secrets.js")).default;
        case "Services": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-services" */ "../../illustrations/tnt/Services.js")).default;
        case "SessionExpired": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-sessionexpired" */ "../../illustrations/tnt/SessionExpired.js")).default;
        case "SessionExpiring": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-sessionexpiring" */ "../../illustrations/tnt/SessionExpiring.js")).default;
        case "Settings": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-settings" */ "../../illustrations/tnt/Settings.js")).default;
        case "Success": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-success" */ "../../illustrations/tnt/Success.js")).default;
        case "SuccessfulAuth": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-successfulauth" */ "../../illustrations/tnt/SuccessfulAuth.js")).default;
        case "Systems": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-systems" */ "../../illustrations/tnt/Systems.js")).default;
        case "Teams": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-teams" */ "../../illustrations/tnt/Teams.js")).default;
        case "Tools": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tools" */ "../../illustrations/tnt/Tools.js")).default;
        case "Tutorials": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tutorials" */ "../../illustrations/tnt/Tutorials.js")).default;
        case "UnableToLoad": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-unabletoload" */ "../../illustrations/tnt/UnableToLoad.js")).default;
        case "Unlock": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-unlock" */ "../../illustrations/tnt/Unlock.js")).default;
        case "UnsuccessfulAuth": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-unsuccessfulauth" */ "../../illustrations/tnt/UnsuccessfulAuth.js")).default;
        case "User2": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-user2" */ "../../illustrations/tnt/User2.js")).default;
        case "tnt-Dialog-Avatar": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-avatar" */ "../../illustrations/tnt/tnt-Dialog-Avatar.js")).default;
        case "tnt-Dialog-Calculator": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-calculator" */ "../../illustrations/tnt/tnt-Dialog-Calculator.js")).default;
        case "tnt-Dialog-ChartArea": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-chartarea" */ "../../illustrations/tnt/tnt-Dialog-ChartArea.js")).default;
        case "tnt-Dialog-ChartArea2": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-chartarea2" */ "../../illustrations/tnt/tnt-Dialog-ChartArea2.js")).default;
        case "tnt-Dialog-ChartBPMNFlow": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-chartbpmnflow" */ "../../illustrations/tnt/tnt-Dialog-ChartBPMNFlow.js")).default;
        case "tnt-Dialog-ChartBar": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-chartbar" */ "../../illustrations/tnt/tnt-Dialog-ChartBar.js")).default;
        case "tnt-Dialog-ChartBullet": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-chartbullet" */ "../../illustrations/tnt/tnt-Dialog-ChartBullet.js")).default;
        case "tnt-Dialog-ChartDoughnut": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-chartdoughnut" */ "../../illustrations/tnt/tnt-Dialog-ChartDoughnut.js")).default;
        case "tnt-Dialog-ChartFlow": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-chartflow" */ "../../illustrations/tnt/tnt-Dialog-ChartFlow.js")).default;
        case "tnt-Dialog-ChartGantt": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-chartgantt" */ "../../illustrations/tnt/tnt-Dialog-ChartGantt.js")).default;
        case "tnt-Dialog-ChartOrg": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-chartorg" */ "../../illustrations/tnt/tnt-Dialog-ChartOrg.js")).default;
        case "tnt-Dialog-ChartPie": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-chartpie" */ "../../illustrations/tnt/tnt-Dialog-ChartPie.js")).default;
        case "tnt-Dialog-CodePlaceholder": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-codeplaceholder" */ "../../illustrations/tnt/tnt-Dialog-CodePlaceholder.js")).default;
        case "tnt-Dialog-Company": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-company" */ "../../illustrations/tnt/tnt-Dialog-Company.js")).default;
        case "tnt-Dialog-Compass": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-compass" */ "../../illustrations/tnt/tnt-Dialog-Compass.js")).default;
        case "tnt-Dialog-Components": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-components" */ "../../illustrations/tnt/tnt-Dialog-Components.js")).default;
        case "tnt-Dialog-Dialog": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-dialog" */ "../../illustrations/tnt/tnt-Dialog-Dialog.js")).default;
        case "tnt-Dialog-ExternalLink": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-externallink" */ "../../illustrations/tnt/tnt-Dialog-ExternalLink.js")).default;
        case "tnt-Dialog-FaceID": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-faceid" */ "../../illustrations/tnt/tnt-Dialog-FaceID.js")).default;
        case "tnt-Dialog-Fingerprint": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-fingerprint" */ "../../illustrations/tnt/tnt-Dialog-Fingerprint.js")).default;
        case "tnt-Dialog-Handshake": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-handshake" */ "../../illustrations/tnt/tnt-Dialog-Handshake.js")).default;
        case "tnt-Dialog-Help": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-help" */ "../../illustrations/tnt/tnt-Dialog-Help.js")).default;
        case "tnt-Dialog-Lock": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-lock" */ "../../illustrations/tnt/tnt-Dialog-Lock.js")).default;
        case "tnt-Dialog-Mission": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-mission" */ "../../illustrations/tnt/tnt-Dialog-Mission.js")).default;
        case "tnt-Dialog-MissionFailed": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-missionfailed" */ "../../illustrations/tnt/tnt-Dialog-MissionFailed.js")).default;
        case "tnt-Dialog-NoApplications": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-noapplications" */ "../../illustrations/tnt/tnt-Dialog-NoApplications.js")).default;
        case "tnt-Dialog-NoFlows": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-noflows" */ "../../illustrations/tnt/tnt-Dialog-NoFlows.js")).default;
        case "tnt-Dialog-NoUsers": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-nousers" */ "../../illustrations/tnt/tnt-Dialog-NoUsers.js")).default;
        case "tnt-Dialog-Radar": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-radar" */ "../../illustrations/tnt/tnt-Dialog-Radar.js")).default;
        case "tnt-Dialog-RoadMap": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-roadmap" */ "../../illustrations/tnt/tnt-Dialog-RoadMap.js")).default;
        case "tnt-Dialog-Secrets": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-secrets" */ "../../illustrations/tnt/tnt-Dialog-Secrets.js")).default;
        case "tnt-Dialog-Services": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-services" */ "../../illustrations/tnt/tnt-Dialog-Services.js")).default;
        case "tnt-Dialog-SessionExpired": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-sessionexpired" */ "../../illustrations/tnt/tnt-Dialog-SessionExpired.js")).default;
        case "tnt-Dialog-SessionExpiring": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-sessionexpiring" */ "../../illustrations/tnt/tnt-Dialog-SessionExpiring.js")).default;
        case "tnt-Dialog-Settings": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-settings" */ "../../illustrations/tnt/tnt-Dialog-Settings.js")).default;
        case "tnt-Dialog-Success": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-success" */ "../../illustrations/tnt/tnt-Dialog-Success.js")).default;
        case "tnt-Dialog-SuccessfulAuth": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-successfulauth" */ "../../illustrations/tnt/tnt-Dialog-SuccessfulAuth.js")).default;
        case "tnt-Dialog-Systems": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-systems" */ "../../illustrations/tnt/tnt-Dialog-Systems.js")).default;
        case "tnt-Dialog-Teams": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-teams" */ "../../illustrations/tnt/tnt-Dialog-Teams.js")).default;
        case "tnt-Dialog-Tools": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-tools" */ "../../illustrations/tnt/tnt-Dialog-Tools.js")).default;
        case "tnt-Dialog-Tutorials": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-tutorials" */ "../../illustrations/tnt/tnt-Dialog-Tutorials.js")).default;
        case "tnt-Dialog-UnableToLoad": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-unabletoload" */ "../../illustrations/tnt/tnt-Dialog-UnableToLoad.js")).default;
        case "tnt-Dialog-Unlock": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-unlock" */ "../../illustrations/tnt/tnt-Dialog-Unlock.js")).default;
        case "tnt-Dialog-UnsuccessfulAuth": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-unsuccessfulauth" */ "../../illustrations/tnt/tnt-Dialog-UnsuccessfulAuth.js")).default;
        case "tnt-Dialog-User2": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dialog-user2" */ "../../illustrations/tnt/tnt-Dialog-User2.js")).default;
        case "tnt-Dot-Avatar": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dot-avatar" */ "../../illustrations/tnt/tnt-Dot-Avatar.js")).default;
        case "tnt-Dot-Calculator": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dot-calculator" */ "../../illustrations/tnt/tnt-Dot-Calculator.js")).default;
        case "tnt-Dot-Compass": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dot-compass" */ "../../illustrations/tnt/tnt-Dot-Compass.js")).default;
        case "tnt-Dot-Dialog": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dot-dialog" */ "../../illustrations/tnt/tnt-Dot-Dialog.js")).default;
        case "tnt-Dot-Handshake": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dot-handshake" */ "../../illustrations/tnt/tnt-Dot-Handshake.js")).default;
        case "tnt-Dot-Help": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dot-help" */ "../../illustrations/tnt/tnt-Dot-Help.js")).default;
        case "tnt-Dot-MissionFailed": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dot-missionfailed" */ "../../illustrations/tnt/tnt-Dot-MissionFailed.js")).default;
        case "tnt-Dot-RoadMap": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dot-roadmap" */ "../../illustrations/tnt/tnt-Dot-RoadMap.js")).default;
        case "tnt-Dot-Settings": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dot-settings" */ "../../illustrations/tnt/tnt-Dot-Settings.js")).default;
        case "tnt-Dot-Tutorials": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-dot-tutorials" */ "../../illustrations/tnt/tnt-Dot-Tutorials.js")).default;
        case "tnt-Scene-Avatar": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-avatar" */ "../../illustrations/tnt/tnt-Scene-Avatar.js")).default;
        case "tnt-Scene-Calculator": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-calculator" */ "../../illustrations/tnt/tnt-Scene-Calculator.js")).default;
        case "tnt-Scene-ChartArea": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-chartarea" */ "../../illustrations/tnt/tnt-Scene-ChartArea.js")).default;
        case "tnt-Scene-ChartArea2": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-chartarea2" */ "../../illustrations/tnt/tnt-Scene-ChartArea2.js")).default;
        case "tnt-Scene-ChartBPMNFlow": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-chartbpmnflow" */ "../../illustrations/tnt/tnt-Scene-ChartBPMNFlow.js")).default;
        case "tnt-Scene-ChartBar": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-chartbar" */ "../../illustrations/tnt/tnt-Scene-ChartBar.js")).default;
        case "tnt-Scene-ChartBullet": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-chartbullet" */ "../../illustrations/tnt/tnt-Scene-ChartBullet.js")).default;
        case "tnt-Scene-ChartDoughnut": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-chartdoughnut" */ "../../illustrations/tnt/tnt-Scene-ChartDoughnut.js")).default;
        case "tnt-Scene-ChartFlow": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-chartflow" */ "../../illustrations/tnt/tnt-Scene-ChartFlow.js")).default;
        case "tnt-Scene-ChartGantt": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-chartgantt" */ "../../illustrations/tnt/tnt-Scene-ChartGantt.js")).default;
        case "tnt-Scene-ChartOrg": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-chartorg" */ "../../illustrations/tnt/tnt-Scene-ChartOrg.js")).default;
        case "tnt-Scene-ChartPie": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-chartpie" */ "../../illustrations/tnt/tnt-Scene-ChartPie.js")).default;
        case "tnt-Scene-CodePlaceholder": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-codeplaceholder" */ "../../illustrations/tnt/tnt-Scene-CodePlaceholder.js")).default;
        case "tnt-Scene-Company": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-company" */ "../../illustrations/tnt/tnt-Scene-Company.js")).default;
        case "tnt-Scene-Compass": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-compass" */ "../../illustrations/tnt/tnt-Scene-Compass.js")).default;
        case "tnt-Scene-Components": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-components" */ "../../illustrations/tnt/tnt-Scene-Components.js")).default;
        case "tnt-Scene-Dialog": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-dialog" */ "../../illustrations/tnt/tnt-Scene-Dialog.js")).default;
        case "tnt-Scene-ExternalLink": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-externallink" */ "../../illustrations/tnt/tnt-Scene-ExternalLink.js")).default;
        case "tnt-Scene-FaceID": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-faceid" */ "../../illustrations/tnt/tnt-Scene-FaceID.js")).default;
        case "tnt-Scene-Fingerprint": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-fingerprint" */ "../../illustrations/tnt/tnt-Scene-Fingerprint.js")).default;
        case "tnt-Scene-Handshake": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-handshake" */ "../../illustrations/tnt/tnt-Scene-Handshake.js")).default;
        case "tnt-Scene-Help": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-help" */ "../../illustrations/tnt/tnt-Scene-Help.js")).default;
        case "tnt-Scene-Lock": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-lock" */ "../../illustrations/tnt/tnt-Scene-Lock.js")).default;
        case "tnt-Scene-Mission": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-mission" */ "../../illustrations/tnt/tnt-Scene-Mission.js")).default;
        case "tnt-Scene-MissionFailed": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-missionfailed" */ "../../illustrations/tnt/tnt-Scene-MissionFailed.js")).default;
        case "tnt-Scene-NoApplications": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-noapplications" */ "../../illustrations/tnt/tnt-Scene-NoApplications.js")).default;
        case "tnt-Scene-NoFlows": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-noflows" */ "../../illustrations/tnt/tnt-Scene-NoFlows.js")).default;
        case "tnt-Scene-NoUsers": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-nousers" */ "../../illustrations/tnt/tnt-Scene-NoUsers.js")).default;
        case "tnt-Scene-Radar": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-radar" */ "../../illustrations/tnt/tnt-Scene-Radar.js")).default;
        case "tnt-Scene-RoadMap": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-roadmap" */ "../../illustrations/tnt/tnt-Scene-RoadMap.js")).default;
        case "tnt-Scene-Secrets": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-secrets" */ "../../illustrations/tnt/tnt-Scene-Secrets.js")).default;
        case "tnt-Scene-Services": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-services" */ "../../illustrations/tnt/tnt-Scene-Services.js")).default;
        case "tnt-Scene-SessionExpired": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-sessionexpired" */ "../../illustrations/tnt/tnt-Scene-SessionExpired.js")).default;
        case "tnt-Scene-SessionExpiring": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-sessionexpiring" */ "../../illustrations/tnt/tnt-Scene-SessionExpiring.js")).default;
        case "tnt-Scene-Settings": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-settings" */ "../../illustrations/tnt/tnt-Scene-Settings.js")).default;
        case "tnt-Scene-Success": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-success" */ "../../illustrations/tnt/tnt-Scene-Success.js")).default;
        case "tnt-Scene-SuccessfulAuth": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-successfulauth" */ "../../illustrations/tnt/tnt-Scene-SuccessfulAuth.js")).default;
        case "tnt-Scene-Systems": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-systems" */ "../../illustrations/tnt/tnt-Scene-Systems.js")).default;
        case "tnt-Scene-Teams": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-teams" */ "../../illustrations/tnt/tnt-Scene-Teams.js")).default;
        case "tnt-Scene-Tools": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-tools" */ "../../illustrations/tnt/tnt-Scene-Tools.js")).default;
        case "tnt-Scene-Tutorials": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-tutorials" */ "../../illustrations/tnt/tnt-Scene-Tutorials.js")).default;
        case "tnt-Scene-UnableToLoad": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-unabletoload" */ "../../illustrations/tnt/tnt-Scene-UnableToLoad.js")).default;
        case "tnt-Scene-Unlock": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-unlock" */ "../../illustrations/tnt/tnt-Scene-Unlock.js")).default;
        case "tnt-Scene-UnsuccessfulAuth": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-unsuccessfulauth" */ "../../illustrations/tnt/tnt-Scene-UnsuccessfulAuth.js")).default;
        case "tnt-Scene-User2": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-scene-user2" */ "../../illustrations/tnt/tnt-Scene-User2.js")).default;
        case "tnt-Spot-Avatar": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-avatar" */ "../../illustrations/tnt/tnt-Spot-Avatar.js")).default;
        case "tnt-Spot-Calculator": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-calculator" */ "../../illustrations/tnt/tnt-Spot-Calculator.js")).default;
        case "tnt-Spot-ChartArea": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-chartarea" */ "../../illustrations/tnt/tnt-Spot-ChartArea.js")).default;
        case "tnt-Spot-ChartArea2": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-chartarea2" */ "../../illustrations/tnt/tnt-Spot-ChartArea2.js")).default;
        case "tnt-Spot-ChartBPMNFlow": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-chartbpmnflow" */ "../../illustrations/tnt/tnt-Spot-ChartBPMNFlow.js")).default;
        case "tnt-Spot-ChartBar": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-chartbar" */ "../../illustrations/tnt/tnt-Spot-ChartBar.js")).default;
        case "tnt-Spot-ChartBullet": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-chartbullet" */ "../../illustrations/tnt/tnt-Spot-ChartBullet.js")).default;
        case "tnt-Spot-ChartDoughnut": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-chartdoughnut" */ "../../illustrations/tnt/tnt-Spot-ChartDoughnut.js")).default;
        case "tnt-Spot-ChartFlow": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-chartflow" */ "../../illustrations/tnt/tnt-Spot-ChartFlow.js")).default;
        case "tnt-Spot-ChartGantt": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-chartgantt" */ "../../illustrations/tnt/tnt-Spot-ChartGantt.js")).default;
        case "tnt-Spot-ChartOrg": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-chartorg" */ "../../illustrations/tnt/tnt-Spot-ChartOrg.js")).default;
        case "tnt-Spot-ChartPie": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-chartpie" */ "../../illustrations/tnt/tnt-Spot-ChartPie.js")).default;
        case "tnt-Spot-CodePlaceholder": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-codeplaceholder" */ "../../illustrations/tnt/tnt-Spot-CodePlaceholder.js")).default;
        case "tnt-Spot-Company": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-company" */ "../../illustrations/tnt/tnt-Spot-Company.js")).default;
        case "tnt-Spot-Compass": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-compass" */ "../../illustrations/tnt/tnt-Spot-Compass.js")).default;
        case "tnt-Spot-Components": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-components" */ "../../illustrations/tnt/tnt-Spot-Components.js")).default;
        case "tnt-Spot-Dialog": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-dialog" */ "../../illustrations/tnt/tnt-Spot-Dialog.js")).default;
        case "tnt-Spot-ExternalLink": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-externallink" */ "../../illustrations/tnt/tnt-Spot-ExternalLink.js")).default;
        case "tnt-Spot-FaceID": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-faceid" */ "../../illustrations/tnt/tnt-Spot-FaceID.js")).default;
        case "tnt-Spot-Fingerprint": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-fingerprint" */ "../../illustrations/tnt/tnt-Spot-Fingerprint.js")).default;
        case "tnt-Spot-Handshake": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-handshake" */ "../../illustrations/tnt/tnt-Spot-Handshake.js")).default;
        case "tnt-Spot-Help": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-help" */ "../../illustrations/tnt/tnt-Spot-Help.js")).default;
        case "tnt-Spot-Lock": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-lock" */ "../../illustrations/tnt/tnt-Spot-Lock.js")).default;
        case "tnt-Spot-Mission": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-mission" */ "../../illustrations/tnt/tnt-Spot-Mission.js")).default;
        case "tnt-Spot-MissionFailed": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-missionfailed" */ "../../illustrations/tnt/tnt-Spot-MissionFailed.js")).default;
        case "tnt-Spot-NoApplications": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-noapplications" */ "../../illustrations/tnt/tnt-Spot-NoApplications.js")).default;
        case "tnt-Spot-NoFlows": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-noflows" */ "../../illustrations/tnt/tnt-Spot-NoFlows.js")).default;
        case "tnt-Spot-NoUsers": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-nousers" */ "../../illustrations/tnt/tnt-Spot-NoUsers.js")).default;
        case "tnt-Spot-Radar": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-radar" */ "../../illustrations/tnt/tnt-Spot-Radar.js")).default;
        case "tnt-Spot-RoadMap": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-roadmap" */ "../../illustrations/tnt/tnt-Spot-RoadMap.js")).default;
        case "tnt-Spot-Secrets": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-secrets" */ "../../illustrations/tnt/tnt-Spot-Secrets.js")).default;
        case "tnt-Spot-Services": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-services" */ "../../illustrations/tnt/tnt-Spot-Services.js")).default;
        case "tnt-Spot-SessionExpired": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-sessionexpired" */ "../../illustrations/tnt/tnt-Spot-SessionExpired.js")).default;
        case "tnt-Spot-SessionExpiring": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-sessionexpiring" */ "../../illustrations/tnt/tnt-Spot-SessionExpiring.js")).default;
        case "tnt-Spot-Settings": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-settings" */ "../../illustrations/tnt/tnt-Spot-Settings.js")).default;
        case "tnt-Spot-Success": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-success" */ "../../illustrations/tnt/tnt-Spot-Success.js")).default;
        case "tnt-Spot-SuccessfulAuth": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-successfulauth" */ "../../illustrations/tnt/tnt-Spot-SuccessfulAuth.js")).default;
        case "tnt-Spot-Systems": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-systems" */ "../../illustrations/tnt/tnt-Spot-Systems.js")).default;
        case "tnt-Spot-Teams": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-teams" */ "../../illustrations/tnt/tnt-Spot-Teams.js")).default;
        case "tnt-Spot-Tools": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-tools" */ "../../illustrations/tnt/tnt-Spot-Tools.js")).default;
        case "tnt-Spot-Tutorials": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-tutorials" */ "../../illustrations/tnt/tnt-Spot-Tutorials.js")).default;
        case "tnt-Spot-UnableToLoad": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-unabletoload" */ "../../illustrations/tnt/tnt-Spot-UnableToLoad.js")).default;
        case "tnt-Spot-Unlock": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-unlock" */ "../../illustrations/tnt/tnt-Spot-Unlock.js")).default;
        case "tnt-Spot-UnsuccessfulAuth": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-unsuccessfulauth" */ "../../illustrations/tnt/tnt-Spot-UnsuccessfulAuth.js")).default;
        case "tnt-Spot-User2": return (await import(/* webpackChunkName: "ui5-webcomponents-fiori-tnt-spot-user2" */ "../../illustrations/tnt/tnt-Spot-User2.js")).default;
        default:
            throw new Error("[Illustrations] Illustration not found: " + illustrationName);
    }
};
const loadAndCheck = async (illustrationName) => {
    const data = await loadIllustration(illustrationName);
    return data;
};
["Avatar", "Calculator", "ChartArea", "ChartArea2", "ChartBPMNFlow", "ChartBar", "ChartBullet", "ChartDoughnut", "ChartFlow", "ChartGantt", "ChartOrg", "ChartPie", "CodePlaceholder", "Company", "Compass", "Components", "Dialog", "ExternalLink", "FaceID", "Fingerprint", "Handshake", "Help", "Lock", "Mission", "MissionFailed", "NoApplications", "NoFlows", "NoUsers", "Radar", "RoadMap", "Secrets", "Services", "SessionExpired", "SessionExpiring", "Settings", "Success", "SuccessfulAuth", "Systems", "Teams", "Tools", "Tutorials", "UnableToLoad", "Unlock", "UnsuccessfulAuth", "User2", "tnt-Dialog-Avatar", "tnt-Dialog-Calculator", "tnt-Dialog-ChartArea", "tnt-Dialog-ChartArea2", "tnt-Dialog-ChartBPMNFlow", "tnt-Dialog-ChartBar", "tnt-Dialog-ChartBullet", "tnt-Dialog-ChartDoughnut", "tnt-Dialog-ChartFlow", "tnt-Dialog-ChartGantt", "tnt-Dialog-ChartOrg", "tnt-Dialog-ChartPie", "tnt-Dialog-CodePlaceholder", "tnt-Dialog-Company", "tnt-Dialog-Compass", "tnt-Dialog-Components", "tnt-Dialog-Dialog", "tnt-Dialog-ExternalLink", "tnt-Dialog-FaceID", "tnt-Dialog-Fingerprint", "tnt-Dialog-Handshake", "tnt-Dialog-Help", "tnt-Dialog-Lock", "tnt-Dialog-Mission", "tnt-Dialog-MissionFailed", "tnt-Dialog-NoApplications", "tnt-Dialog-NoFlows", "tnt-Dialog-NoUsers", "tnt-Dialog-Radar", "tnt-Dialog-RoadMap", "tnt-Dialog-Secrets", "tnt-Dialog-Services", "tnt-Dialog-SessionExpired", "tnt-Dialog-SessionExpiring", "tnt-Dialog-Settings", "tnt-Dialog-Success", "tnt-Dialog-SuccessfulAuth", "tnt-Dialog-Systems", "tnt-Dialog-Teams", "tnt-Dialog-Tools", "tnt-Dialog-Tutorials", "tnt-Dialog-UnableToLoad", "tnt-Dialog-Unlock", "tnt-Dialog-UnsuccessfulAuth", "tnt-Dialog-User2", "tnt-Dot-Avatar", "tnt-Dot-Calculator", "tnt-Dot-Compass", "tnt-Dot-Dialog", "tnt-Dot-Handshake", "tnt-Dot-Help", "tnt-Dot-MissionFailed", "tnt-Dot-RoadMap", "tnt-Dot-Settings", "tnt-Dot-Tutorials", "tnt-Scene-Avatar", "tnt-Scene-Calculator", "tnt-Scene-ChartArea", "tnt-Scene-ChartArea2", "tnt-Scene-ChartBPMNFlow", "tnt-Scene-ChartBar", "tnt-Scene-ChartBullet", "tnt-Scene-ChartDoughnut", "tnt-Scene-ChartFlow", "tnt-Scene-ChartGantt", "tnt-Scene-ChartOrg", "tnt-Scene-ChartPie", "tnt-Scene-CodePlaceholder", "tnt-Scene-Company", "tnt-Scene-Compass", "tnt-Scene-Components", "tnt-Scene-Dialog", "tnt-Scene-ExternalLink", "tnt-Scene-FaceID", "tnt-Scene-Fingerprint", "tnt-Scene-Handshake", "tnt-Scene-Help", "tnt-Scene-Lock", "tnt-Scene-Mission", "tnt-Scene-MissionFailed", "tnt-Scene-NoApplications", "tnt-Scene-NoFlows", "tnt-Scene-NoUsers", "tnt-Scene-Radar", "tnt-Scene-RoadMap", "tnt-Scene-Secrets", "tnt-Scene-Services", "tnt-Scene-SessionExpired", "tnt-Scene-SessionExpiring", "tnt-Scene-Settings", "tnt-Scene-Success", "tnt-Scene-SuccessfulAuth", "tnt-Scene-Systems", "tnt-Scene-Teams", "tnt-Scene-Tools", "tnt-Scene-Tutorials", "tnt-Scene-UnableToLoad", "tnt-Scene-Unlock", "tnt-Scene-UnsuccessfulAuth", "tnt-Scene-User2", "tnt-Spot-Avatar", "tnt-Spot-Calculator", "tnt-Spot-ChartArea", "tnt-Spot-ChartArea2", "tnt-Spot-ChartBPMNFlow", "tnt-Spot-ChartBar", "tnt-Spot-ChartBullet", "tnt-Spot-ChartDoughnut", "tnt-Spot-ChartFlow", "tnt-Spot-ChartGantt", "tnt-Spot-ChartOrg", "tnt-Spot-ChartPie", "tnt-Spot-CodePlaceholder", "tnt-Spot-Company", "tnt-Spot-Compass", "tnt-Spot-Components", "tnt-Spot-Dialog", "tnt-Spot-ExternalLink", "tnt-Spot-FaceID", "tnt-Spot-Fingerprint", "tnt-Spot-Handshake", "tnt-Spot-Help", "tnt-Spot-Lock", "tnt-Spot-Mission", "tnt-Spot-MissionFailed", "tnt-Spot-NoApplications", "tnt-Spot-NoFlows", "tnt-Spot-NoUsers", "tnt-Spot-Radar", "tnt-Spot-RoadMap", "tnt-Spot-Secrets", "tnt-Spot-Services", "tnt-Spot-SessionExpired", "tnt-Spot-SessionExpiring", "tnt-Spot-Settings", "tnt-Spot-Success", "tnt-Spot-SuccessfulAuth", "tnt-Spot-Systems", "tnt-Spot-Teams", "tnt-Spot-Tools", "tnt-Spot-Tutorials", "tnt-Spot-UnableToLoad", "tnt-Spot-Unlock", "tnt-Spot-UnsuccessfulAuth", "tnt-Spot-User2"].forEach((illustrationName) => registerIllustrationLoader(`tnt/V4/${illustrationName}`, loadAndCheck));
//# sourceMappingURL=IllustrationsTNT.js.map