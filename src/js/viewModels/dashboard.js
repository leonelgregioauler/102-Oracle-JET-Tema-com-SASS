/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
define([
  "accUtils",
  "ojs/ojcore",
  "knockout",
  "jquery",
  "appController",
  "ojs/ojknockout",
  "ojs/ojbutton",
  "ojs/ojdialog",
  "ojs/ojpopup",
  "ojs/ojrouter"
], 
function (accUtils, oj, ko, $, app) {
    function DashboardViewModel() {
      var self = this;
      self.theme = {};
      self.themeTargetPlatform = oj.ThemeUtils.getThemeTargetPlatform();
      self.theme.baseTheme = ko.observable("alta");
      self.theme.demoTheme = ko.observable("none");

      self.theme.demoTheme.subscribe(function (valor) {
        self.theme.demoTheme(valor);
        //saveThemeSettings();
        sessionStorage.setItem(
          jetThemeSettingsSessionStorageName,
          JSON.stringify({
            baseTheme: self.theme.baseTheme(),
            demoTheme: self.theme.demoTheme(),
          })
        );
        window.location.reload();
      });

      self.connected = function() {
        accUtils.announce('Dashboard page loaded.', 'assertive');
        document.title = "Dashboard";
        // Implement further logic if needed
      };

      self.disconnected = function() {
        // Implement if needed
      };

      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    return DashboardViewModel;
  }
);
