/**
 * Copyright 2021-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Instagram For Original Coast Clothing
 *
 */

"use strict";

// Imports dependencies
const Response = require("./response"),
  i18n = require("../i18n.config"),
  config = require("./config");

module.exports = class Checklist {
  constructor(user, webhookEvent) {
    this.user = user;
    this.webhookEvent = webhookEvent;
  }
  handlePayload(payload) {
    let response;

    switch (payload) {
      case "GET_CHECKLIST":
        response = Response.genQuickReply(
          i18n.__("get_started.checklist_init", {
            userName: this.user.name
          }),
          [
            {
              title: i18n.__("checklist.get"),
              payload: "CONTENT_CHECKLIST"
            },
          ]
        );
        break;
      
      case "CONTENT_CHECKLIST":
        response = [
          Response.genText( i18n.__( "checklist.content" ) ),
          Response.genText( i18n.__( "checklist.thanks" ), 500 )
        ];
        break;
    }

    return response;
  }
};
