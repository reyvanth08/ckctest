(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["campaign-campaign-module"],{

/***/ "./src/app/campaign/abtesting-stats/abtesting-stats.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/campaign/abtesting-stats/abtesting-stats.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"basic-elements\">\r\n\t<div class=\"row\">\r\n\t\t<!--Tabset Starts-->\r\n\t\t<div class=\"col-md-12 col-lg-12\">\r\n\t\t\t<ngb-tabset (tabChange)=\"selectData($event)\">\r\n\t\t\t\t<ngb-tab title=\"A/B Testing Result\">\r\n\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t        <div class=\"card-header\">\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"!successSent\">\r\n\t\t\t\t\t          \tA/B Test for <b>{{name}}</b> - <strong class=\"text-warning\">In Progress.</strong>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"successSent\">\r\n\t\t\t\t\t\t\t\t\t\t\tA/B Test for <b>{{name}}</b> - <strong class=\"text-success\">Sent Successfully</strong>.\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"text-right\" *ngIf=\"showmanualSent\">\r\n\t\t\t\t\t\t          <button type=\"button\" class=\"btn btn-raised btn-success\" (click)=\"sendCampaign()\">Send</button> the Winner Campaing {{winnerType}} for {{name}}\r\n\t\t\t\t\t\t        </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t<lib-highcharts-angular *ngIf=\"loadChart\"\r\n\t\t\t\t\t\t\t\t\t  [Highcharts]=\"Highcharts\"\r\n\t\t\t\t\t\t\t\t\t  [options]=\"chartOptions\"\r\n\t\t\t\t\t\t\t\t\t  style=\"width: 100%; height: 400px; display: block;\"\r\n\t\t\t\t\t\t\t\t\t></lib-highcharts-angular>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t      </div>\r\n\t\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Campaign OverView</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Version A</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Version B</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Opens</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{campaignOverView?.openARate}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{campaignOverView?.openBRate}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Total Clicks</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{campaignOverView?.clickARate}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{campaignOverView?.clickBRate}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Unsubscribes</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{campaignOverView?.unsubscribeCountA}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{campaignOverView?.unsubscribeCountB}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t      </div>\r\n\t\t\t\t\t    </div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-tab>\r\n\t\t\t\t<ngb-tab title=\"Overview\" id=\"Overview\" active=\"SelectedTab == 'Overview'\" *ngIf=\"successSent\">\r\n\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t<ng4-loading-spinner> </ng4-loading-spinner>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-6 col-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"px-3 py-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body text-left align-self-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"icon-envelope-open info font-large-2 float-left\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body text-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>{{openCount}}</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Opened</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-6 col-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"px-3 py-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body text-left align-self-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"icon-link warning font-large-2 float-left\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body text-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>{{clickCount}}</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Clicked</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-6 col-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"px-3 py-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body text-left align-self-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"icon-envelope success font-large-2 float-left\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body text-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>{{totalSent - openCount}}</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Unopened</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-xl-6 col-lg-12 col-sm-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-header pb-0\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-title-wrap bar-primary\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Report Detail</h4>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t<br/><br/>\r\n\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"subjecta != ''\"><b>Subject A</b>: {{subjecta}}</p><br/>\r\n\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"subjectb != ''\"><b>Subject B</b>: {{subjectb}}</p><br/>\r\n\t\t\t\t\t\t\t\t\t\t\t<b>Sent To</b>: {{list}}<br/>\r\n\t\t\t\t\t\t\t\t\t\t\t<b>Total Recipients</b>: {{noOfUsers}}<br/><br/>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-xl-6 col-lg-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-header pb-0\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-title-wrap bar-primary\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Sends <span class=\"smallContent\">Last sent on </span></h4>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card gradient-mint\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t        <div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t          <div class=\"px-3 py-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t            <div class=\"media\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t              <div class=\"align-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t                <i class=\"fas fa-check-double font-large-2 text-white\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t              </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t              <div class=\"media-body text-white text-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t                <h3 class=\"text-white\">{{totalSentPerc | number : '1.0-2'}}%</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t                <span>Delivered</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t              </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t            </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t          </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t    </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card gradient-red-pink\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t        <div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t          <div class=\"px-3 py-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t            <div class=\"media\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t              <div class=\"align-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t              \t<i class=\"fas fa-exclamation-triangle font-large-2 text-white\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t              </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t              <div class=\"media-body text-white text-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t                <h3 class=\"text-white\">{{notSentPerc | number : '1.0-2'}}%</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t                <span>Bounced</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t              </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t            </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t          </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t    </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t        <div class=\"card-header\">\r\n\t\t\t\t\t\t\t          <div class=\"card-title-wrap bar-primary\">\r\n\t\t\t\t\t\t\t            <h4 class=\"card-title\">Links</h4>\r\n\t\t\t\t\t\t\t          </div>\r\n\t\t\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t\t        <div class=\"card-body\">\r\n\t\t\t\t\t\t\t          \t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let link of links\">\r\n\t                  \t\t\t\t<td *ngIf=\"(link.clickCount - link.openCount) != 0 && (link.link != null && link.link != '')\">\r\n\t                      \t\t\t\t{{link.link}}\r\n\t                  \t\t\t\t</td>\r\n\t                  \t\t\t\t<td style=\"width: 100%;\" *ngIf=\"(link.clickCount - link.openCount) != 0 && (link.link != null && link.link != '')\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ngb-progressbar type=\"info\" [value]=\"(link.clickCount / link.openCount) * 100\" [striped]=\"true\" [animated]=\"true\" class=\"progress-bar-md\"></ngb-progressbar> {{link.clickCount}} of {{link.openCount}}\r\n\t                  \t\t\t\t</td>\r\n\t                  \t\t\t\t<td style=\"width: 100%;\" *ngIf=\"(link.clickCount - link.openCount) == 0 && (link.link != null && link.link != '')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ngb-progressbar type=\"success\" [value]=\"100\" [striped]=\"true\" class=\"progress-bar-md\"></ngb-progressbar>{{link.clickCount}} of {{link.openCount}}\r\n\t                  \t\t\t\t</td>\r\n\t              \t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t            \t</table>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-title-wrap bar-primary\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Domains</h4>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let domain of domains\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"(domain.count) != 0 && (domain.domains != null && domain.domains != '')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{domain.domains}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"width: 100%;\" *ngIf=\"(domain.count) != 0 && (domain.domains != null && domain.domains != '')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ngb-progressbar type=\"success\" [value]=\"(domain.count / noOfUsers) * 100\" [striped]=\"true\" class=\"progress-bar-md\"></ngb-progressbar> {{domain.count}} of {{noOfUsers}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-tab>\r\n\t\t\t\t<ngb-tab title=\"Link\" id=\"Link\" active=\"SelectedTab == 'Link'\" *ngIf=\"successSent\">\r\n\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t<ng4-loading-spinner> </ng4-loading-spinner>\r\n\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t        <div class=\"card-header\">\r\n\t\t\t\t\t          <div class=\"card-title-wrap bar-primary\">\r\n\t\t\t\t\t            <h4 class=\"card-title\">Links</h4>\r\n\t\t\t\t\t          </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t        <div class=\"card-body\">\r\n\t\t\t\t\t         \t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let link of links\">\r\n\t\t \t\t\t\t\t\t\t\t\t\t\t <td *ngIf=\"(link.clickCount - link.openCount) != 0 && (link.link != null && link.link != '')\">\r\n\t\t \t\t\t\t\t\t\t\t\t\t\t\t\t {{link.link}}\r\n\t\t \t\t\t\t\t\t\t\t\t\t\t </td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t <td style=\"width: 100%;\" *ngIf=\"(link.clickCount - link.openCount) != 0 && (link.link != null && link.link != '')\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t <ngb-progressbar type=\"info\" [value]=\"(link.clickCount / link.openCount) * 100\" [striped]=\"true\" [animated]=\"true\" class=\"progress-bar-md\"></ngb-progressbar> {{link.clickCount}} of {{link.openCount}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t </td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t <td style=\"width: 100%;\" *ngIf=\"(link.clickCount - link.openCount) == 0 && (link.link != null && link.link != '')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t <ngb-progressbar type=\"success\" [value]=\"100\" [striped]=\"true\" class=\"progress-bar-md\"></ngb-progressbar>{{link.clickCount}} of {{link.openCount}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t </td>\r\n\t\t \t\t\t\t\t\t\t\t\t\t </tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t            \t</table>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-tab>\r\n\t\t\t\t<ngb-tab title=\"Domain\" id=\"Domain\" active=\"SelectedTab == 'Domain'\" *ngIf=\"successSent\">\r\n\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t<ng4-loading-spinner> </ng4-loading-spinner>\r\n\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-title-wrap bar-primary\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Domains</h4>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let domain of domains\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"(domain.count) != 0 && (domain.domains != null && domain.domains != '')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{domain.domains}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"width: 100%;\" *ngIf=\"(domain.count) != 0 && (domain.domains != null && domain.domains != '')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ngb-progressbar type=\"success\" [value]=\"(domain.count / noOfUsers) * 100\" [striped]=\"true\" class=\"progress-bar-md\"></ngb-progressbar> {{domain.count}} of {{noOfUsers}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-tab>\r\n\t\t\t\t<ngb-tab title=\"Activity\" id=\"Activity\" active=\"SelectedTab == 'Activity'\" *ngIf=\"successSent\">\r\n\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t<ng4-loading-spinner> </ng4-loading-spinner>\r\n\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-title-wrap bar-success\">\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-info btn-raised\" (click)=\"openSubscriberList()\" style=\"margin-right: 14px;\">Opens</button>\r\n\t\t\t    \t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-raised\" (click)=\"clickSubscriberList()\" style=\"margin-right: 14px;\">Clicks</button>\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-raised\" (click)=\"unSubscriberList()\" style=\"margin-right: 14px;\">Unsubscribers</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"card-body\" *ngIf=\"openCountTable\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t\t\t<table class=\"table table-responsive-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>First Name</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Last Name</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Email</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>DateTime</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t\t<tbody >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let data of openSubscribers\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{data.firstName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{data.lastName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{data.email}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{data.dateTime}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"card-body\" *ngIf=\"clickCountTable\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t\t\t<table class=\"table table-responsive-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LinkCount</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Link</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Name</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let data of clickSubscribers\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{data.linkCount}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{data.link}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{data.name}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"card-body\" *ngIf=\"unsubscriberTable\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t\t\t<table class=\"table table-responsive-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>FirstName</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LastName</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Email</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>UnsubscribeDate</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let data of campaignUnsubscribers\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{data.firstName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{data.lastName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{data.email}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{data.unsubscribe_date}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-tab>\r\n\t\t\t</ngb-tabset>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/campaign/abtesting-stats/abtesting-stats.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/campaign/abtesting-stats/abtesting-stats.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbXBhaWduL2FidGVzdGluZy1zdGF0cy9hYnRlc3Rpbmctc3RhdHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/campaign/abtesting-stats/abtesting-stats.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/campaign/abtesting-stats/abtesting-stats.component.ts ***!
  \***********************************************************************/
/*! exports provided: AbtestingStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbtestingStatsComponent", function() { return AbtestingStatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_data_statistics_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/data/statistics.service */ "./src/app/shared/data/statistics.service.ts");
/* harmony import */ var _shared_data_newsletter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/data/newsletter.service */ "./src/app/shared/data/newsletter.service.ts");
/* harmony import */ var _shared_data_abtestingStats_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/data/abtestingStats.service */ "./src/app/shared/data/abtestingStats.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { interval } from 'rxjs/observable/interval';






var AbtestingStatsComponent = /** @class */ (function () {
    function AbtestingStatsComponent(spinner, abtestingStatisticsService, statisticsService, route, router, newsLetterService) {
        var _this = this;
        this.spinner = spinner;
        this.abtestingStatisticsService = abtestingStatisticsService;
        this.statisticsService = statisticsService;
        this.route = route;
        this.router = router;
        this.newsLetterService = newsLetterService;
        this.currentTime = new Date();
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_3__;
        this.loadChart = false;
        this.ChartColorScheme = {
            domain: ['#666EE8', '#FF9149', '#FF4961', '#AAAAAA']
        };
        this.sendABtestManual = false;
        this.showmanualSent = false;
        this.winnerType = '';
        this.successSent = false;
        this.stoplooping = false;
        this.totalSent = 0;
        this.notSent = 0;
        this.SelectedTab = '';
        this.noOfUsers = 0;
        this.subjecta = '';
        this.subjectb = '';
        this.route.queryParams.subscribe(function (params) {
            _this.newsletterId = window.atob(params['id']);
        });
        this.newsletterId = ((this.newsletterId * 8000) / 1080);
        this.newsLetterService.getabtestingResult(this.newsletterId).then(function (data) {
            if (data['status'] == 'success') {
                _this.campaignOverView = data['newsletter'][0];
                console.log(_this.campaignOverView);
            }
            else {
                _this.campaignOverView = '';
            }
        });
        this.statisticsService.getabtestingReportById(this.newsletterId, new Date().getTime()).then(function (data) {
            //console.log(data['reports']);
            //console.log('1-'+JSON.stringify(this.chartOptions));
            if (data['status'] == 'success') {
                _this.abtestingReport = data['reports'];
                if (_this.abtestingReport[0].type == 'manual') {
                    _this.sendABtestManual = true;
                }
                _this.subjecta = _this.abtestingReport[0].subjecta;
                _this.subjectb = _this.abtestingReport[0].subjectb;
                _this.winnerRate = _this.abtestingReport[0].rateTrack;
                _this.name = _this.abtestingReport[0].name;
                var senddate_1 = _this.abtestingReport[0].sendDate.split('-');
                //console.log(this.abtestingReport[0].endTime);
                var enddate = _this.abtestingReport[0].endTime.split(' ')[0].split('-');
                _this.stopTime = new Date(_this.abtestingReport[0].endTime.split(' ')[0] + ' ' + _this.abtestingReport[0].endTime.split(' ')[1]);
                var timeval_1 = _this.abtestingReport[0].sendTime.split(':');
                var month_1 = new Date(_this.abtestingReport[0].sendDate).getUTCMonth();
                //console.log('this.stopTime cons - '+ this.stopTime);
                _this.statisticsService.getabTestStats(_this.newsletterId, new Date().getTime()).then(function (data) {
                    if (data['status'] == 'success') {
                        var chartData = [];
                        if (_this.abtestingReport[0].rateTrack == 'open') {
                            _this.openRates = data['reports']['open'];
                            if (_this.openRates.length > 0) {
                                var lineChartData = [
                                    {
                                        "name": _this.abtestingReport[0].rateTrack + ' Rate',
                                        "series": []
                                    }
                                ];
                                var lineyAxisTicks = [];
                                var dataA = [];
                                var dataB = [];
                                for (var i = 0; i < _this.openRates.length; i++) {
                                    if (_this.openRates[i].hasOwnProperty('OpenCounta')) {
                                        lineChartData[0].series.push({ "name": _this.openRates[i].OpenTimea, "value": parseInt(_this.openRates[i].OpenCounta) });
                                        lineyAxisTicks.push(parseInt(_this.openRates[i].OpenCounta));
                                    }
                                    if (_this.openRates[i].hasOwnProperty('OpenCountb')) {
                                        lineChartData[0].series.push({ "name": _this.openRates[i].OpenTimeb, "value": parseInt(_this.openRates[i].OpenCountb) });
                                        lineyAxisTicks.push(parseInt(_this.openRates[i].OpenCountb));
                                    }
                                    if (_this.openRates[i].hasOwnProperty('OpenCounta')) {
                                        dataA.push([_this.openRates[i].OpenTimea, parseInt(_this.openRates[i].OpenCounta)]);
                                    }
                                    else {
                                        dataA.push(["00:00", 0]);
                                    }
                                    if (_this.openRates[i].hasOwnProperty('OpenCountb')) {
                                        dataB.push([_this.openRates[i].OpenTimeb, parseInt(_this.openRates[i].OpenCountb)]);
                                    }
                                    else {
                                        dataB.push(["00:00", 0]);
                                    }
                                }
                                chartData.push({ "layout": lineChartData.slice(), "yAxisTicks": lineyAxisTicks, "name": _this.abtestingReport[0].rateTrack + " Rate For A/B Testing", "chartType": "'line'", "xaxis": _this.abtestingReport[0].rateTrack + " Rate", "yaxis": "Time" });
                                // console.log(this.chartOptions.series[0].data);
                                // this.chartOptions.series[0].data = dataA;
                                // console.log(this.chartOptions.series[0].data);
                                // console.log(this.chartOptions.series[1].data);
                                // this.chartOptions.series[1].data = dataB;
                                // console.log(this.chartOptions.series[1].data);
                                // this.chartOptions.xAxis.tickInterval = (10000*60);
                                // let senddate = this.abtestingReport[0].sendDate.split('-');
                                // let enddate = this.abtestingReport[0].endTime.split('-');
                                // this.chartOptions.xAxis.min = Date.UTC(senddate[0], senddate[1], senddate[2], 0, 0, 0);
                                // this.chartOptions.xAxis.max = Date.UTC(enddate[0], enddate[1], enddate[2], 0, 0, 0);
                                // this.chartOptions.plotOptions['series'].pointInterval = (10000*60);
                                // this.chartOptions.plotOptions['series'].pointStart = Date.UTC(senddate[0], senddate[1], senddate[2], 0, 0, 0);
                                //console.log(senddate[0]+','+ parseInt(senddate[1] - 1)+','+ senddate[2]);
                                highcharts__WEBPACK_IMPORTED_MODULE_3__["setOptions"]({
                                    time: {
                                        timezoneOffset: parseInt(timeval_1[0]) * 60
                                    }
                                });
                                _this.chartOptions = {
                                    title: {
                                        text: _this.abtestingReport[0].rateTrack + ' Rate'
                                    },
                                    chart: {
                                        type: 'spline'
                                    },
                                    xAxis: {
                                        type: 'datetime'
                                    },
                                    series: [{
                                            data: dataA,
                                            pointStart: Date.UTC((senddate_1[0]), month_1, (senddate_1[2])),
                                            pointInterval: 10000 * 60,
                                            name: 'version A'
                                        },
                                        {
                                            data: dataB,
                                            pointStart: Date.UTC((senddate_1[0]), month_1, (senddate_1[2])),
                                            pointInterval: 10000 * 60,
                                            name: 'version B'
                                        }]
                                };
                                _this.loadChart = true;
                                //this.chartOptions = {
                                // chart: {
                                //   type: 'spline'
                                // },
                                // xAxis: {
                                //     type: 'datetime'
                                // },
                                // plotOptions: {
                                //   series: {
                                //       pointInterval : timeval[0] * 60
                                //   }
                                // },
                                // series: [{
                                //     data: [dataA],
                                //     //pointStart: Date.UTC(senddate[0], parseInt(senddate[1] - 1), senddate[2]),
                                //     //pointInterval: 60 * 10000,
                                //     name:'version A'
                                // },
                                // {
                                //     data: [dataB],
                                //     //pointStart: Date.UTC(senddate[0], (senddate[1] - 1), senddate[2]),
                                //     //pointInterval: 60 * 10000,
                                //     name:'version B'
                                // }]
                                //   xAxis: {
                                //   type :'datetime',
                                //   tickInterval : 10000 * 60,
                                //   min : Date.UTC(senddate[0], senddate[1], senddate[2]),
                                //   max : Date.UTC(enddate[0], enddate[1], enddate[2]),
                                //   label : {
                                //     align : 'left'
                                //   }
                                // },
                                // yAxis: {
                                //   title: {
                                //       text: this.abtestingReport[0].rateTrack +' Rate'
                                //   },
                                //   lineWidth: 2,
                                //   plotLines: [{
                                //       value: 0,
                                //       width: 1,
                                //       color: '#808080'
                                //   }]
                                // },
                                // plotOptions: {
                                //   series: {
                                //       pointStart: Date.UTC(senddate[0], senddate[1], senddate[2]),
                                //       pointInterval : 10000 * 60
                                //   }
                                // },
                                // series: [{
                                //     data:dataA,
                                //     name:'version A'
                                //     },{
                                //     data:dataB,
                                //     name:'version B'
                                //   }]
                                //}
                            }
                            //this.chartOptions = chartData;
                            console.log(_this.chartOptions);
                        }
                        if (_this.abtestingReport[0].rateTrack == 'click') {
                            _this.clickRates = data['reports']['click'];
                            if (_this.clickRates.length > 0) {
                                var dataA = [];
                                var dataB = [];
                                for (var i = 0; i < _this.clickRates.length; i++) {
                                    if (_this.clickRates[i].hasOwnProperty('linkCounta')) {
                                        dataA.push([_this.clickRates[i].ClickTimea, parseInt(_this.clickRates[i].linkCounta)]);
                                    }
                                    else {
                                        dataA.push(["00:00", 0]);
                                    }
                                    if (_this.clickRates[i].hasOwnProperty('linkCountb')) {
                                        dataB.push([_this.clickRates[i].ClickTimeb, parseInt(_this.clickRates[i].linkCountb)]);
                                    }
                                    else {
                                        dataB.push(["00:00", 0]);
                                    }
                                }
                                _this.chartOptions = {
                                    title: {
                                        text: _this.abtestingReport[0].rateTrack + ' Rate'
                                    },
                                    chart: {
                                        type: 'spline'
                                    },
                                    xAxis: {
                                        type: 'datetime'
                                    },
                                    series: [{
                                            data: dataA,
                                            pointStart: Date.UTC(parseInt(senddate_1[0]), month_1, parseInt(senddate_1[2])),
                                            pointInterval: 10000 * 60,
                                            name: 'version A'
                                        },
                                        {
                                            data: dataB,
                                            pointStart: Date.UTC(parseInt(senddate_1[0]), month_1, parseInt(senddate_1[2])),
                                            pointInterval: 10000 * 60,
                                            name: 'version B'
                                        }]
                                };
                                console.log(JSON.stringify(_this.chartOptions));
                                _this.loadChart = true;
                                // Highcharts.setOptions({
                                //     time: {
                                //         timezoneOffset: 5 * 60
                                //     }
                                // });
                                //
                                // Highcharts.chart('container', {
                                //     chart:{
                                //       type: 'line'
                                //     },
                                //     title: {
                                //         text: 'Timezone offset is 5 hours (=EST). The data series starts at midnight UTC, which is 7 PM EST.'
                                //     },
                                //     xAxis: {
                                //         type: 'datetime'
                                //     },
                                //     series: [{
                                //         data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                                //         pointStart: Date.UTC(2013, 0, 1),
                                //         pointInterval: 36e5 // one hour
                                //     }]
                                // });
                                // this.chartOptions = {
                                //   title: {
                                //       text: 'Timezone offset is 5 hours (=EST). The data series starts at midnight UTC, which is 7 PM EST.'
                                //   },
                                //
                                //   xAxis: {
                                //       type: 'datetime'
                                //   },
                                //
                                //   series: [{
                                //       data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                                //       pointStart: Date.UTC(2013, 0, 1),
                                //       pointInterval: 36e5 // one hour
                                //   }]
                                // chart: {
                                //   type: 'spline'
                                // },
                                // xAxis: {
                                //     type: 'datetime'
                                // },
                                // plotOptions: {
                                //   series: {
                                //       pointInterval : timeval[0] * 60
                                //   }
                                // },
                                // series: [{
                                //     data: [dataA],
                                //     //pointStart: Date.UTC(senddate[0], (senddate[1] - 1), senddate[2]),
                                //     //pointInterval: 10000 * 60,
                                //     name:'version A'
                                // },
                                // {
                                //     data: [dataB],
                                //     //pointStart: Date.UTC(senddate[0], (senddate[1] - 1), senddate[2]),
                                //     //pointInterval: 10000 * 60,
                                //     name:'version B'
                                // }]
                                //};
                            }
                        }
                        if (_this.abtestingReport[0].rateTrack == 'unsubscriber') {
                            _this.unsubscribers = data['reports']['unsubscribe'];
                            if (_this.unsubscribers.length > 0) {
                                var dataA = [];
                                var dataB = [];
                                for (var i = 0; i < _this.unsubscribers.length; i++) {
                                    if (_this.unsubscribers[i].hasOwnProperty('unsubscribeCountA')) {
                                        dataA.push([_this.unsubscribers[i].Timea, parseInt(_this.unsubscribers[i].unsubscribeCountA)]);
                                    }
                                    else {
                                        dataA.push(["00:00", 0]);
                                    }
                                    if (_this.unsubscribers[i].hasOwnProperty('unsubscribeCountB')) {
                                        dataB.push([_this.unsubscribers[i].Timeb, parseInt(_this.unsubscribers[i].unsubscribeCountB)]);
                                    }
                                    else {
                                        dataB.push(["00:00", 0]);
                                    }
                                }
                                _this.chartOptions = {
                                    title: {
                                        text: _this.abtestingReport[0].rateTrack + ' Rate'
                                    },
                                    chart: {
                                        type: 'spline'
                                    },
                                    xAxis: {
                                        type: 'datetime'
                                    },
                                    series: [{
                                            data: dataA,
                                            pointStart: Date.UTC(parseInt(senddate_1[0]), month_1, parseInt(senddate_1[2])),
                                            pointInterval: 10000 * 60,
                                            name: 'version A'
                                        },
                                        {
                                            data: dataB,
                                            pointStart: Date.UTC(parseInt(senddate_1[0]), month_1, parseInt(senddate_1[2])),
                                            pointInterval: 10000 * 60,
                                            name: 'version B'
                                        }]
                                };
                                console.log(JSON.stringify(_this.chartOptions));
                                _this.loadChart = true;
                            }
                        }
                    }
                    console.log('2-' + JSON.stringify(_this.chartOptions));
                });
                if (_this.stopTime.getTime() <= new Date().getTime()) {
                    _this.stoplooping = true;
                    if (_this.sendABtestManual) {
                        _this.newsLetterService.getABTestingWinner(_this.newsletterId, _this.winnerRate).then(function (data) {
                            if (data['status'] == 'success') {
                                _this.showmanualSent = true;
                                _this.successSent = false;
                                _this.winnerType = data['newsletter'];
                                _this.subscription.unsubscribe();
                            }
                            else {
                                _this.showmanualSent = false;
                                _this.successSent = true;
                                _this.subscription.unsubscribe();
                            }
                        });
                    }
                    else {
                        _this.newsLetterService.sendABTestingNewletterwinner(_this.newsletterId, _this.winnerRate).then(function (data) {
                            if (data['status']) {
                                _this.successSent = true;
                                _this.subscription.unsubscribe();
                            }
                        });
                    }
                }
            }
        }, function (error) {
        });
    }
    AbtestingStatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.stoplooping) {
            this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(2000 * 60).subscribe(function (x) {
                // console.log('this.stopTime - '+this.stopTime);
                // console.log('this.stopTime getTime - '+this.stopTime.getTime());
                // console.log('new date - '+new Date().getTime());
                if (_this.stopTime.getTime() <= new Date().getTime()) {
                    _this.stoplooping = true;
                    if (_this.sendABtestManual) {
                        _this.newsLetterService.getABTestingWinner(_this.newsletterId, _this.winnerRate).then(function (data) {
                            if (data['status'] == 'success') {
                                _this.showmanualSent = true;
                                _this.successSent = false;
                                _this.winnerType = data['newsletter'];
                                _this.subscription.unsubscribe();
                            }
                            else {
                                _this.showmanualSent = false;
                                _this.successSent = true;
                                _this.subscription.unsubscribe();
                            }
                        });
                    }
                    else {
                        _this.newsLetterService.sendABTestingNewletterwinner(_this.newsletterId, _this.winnerRate).then(function (data) {
                            if (data['status']) {
                                _this.successSent = true;
                                _this.subscription.unsubscribe();
                            }
                        });
                    }
                }
                else {
                    if (_this.stopTime.getTime() > new Date().getTime()) {
                        _this.statisticsService.getabtestingReportById(_this.newsletterId, new Date().getTime()).then(function (data) {
                            if (data['status'] == 'success') {
                                _this.abtestingReport = data['reports'];
                                _this.winnerRate = _this.abtestingReport[0].rateTrack;
                                _this.name = _this.abtestingReport[0].name;
                                var senddate_2 = _this.abtestingReport[0].sendDate.split('-');
                                //console.log(this.abtestingReport[0].endTime);
                                var enddate = _this.abtestingReport[0].endTime.split(' ')[0].split('-');
                                _this.stopTime = new Date(_this.abtestingReport[0].endTime.split(' ')[0] + ' ' + _this.abtestingReport[0].endTime.split(' ')[1]);
                                var timeval_2 = _this.abtestingReport[0].sendTime.split(':');
                                var month_2 = new Date(_this.abtestingReport[0].sendDate).getUTCMonth();
                                console.log('date greater - ' + month_2);
                                _this.statisticsService.getabTestStats(_this.newsletterId, new Date().getTime()).then(function (data) {
                                    if (data['status'] == 'success') {
                                        var chartData = [];
                                        if (_this.abtestingReport[0].rateTrack == 'open') {
                                            _this.openRates = data['reports']['open'];
                                            if (_this.openRates.length > 0) {
                                                var lineChartData = [
                                                    {
                                                        "name": _this.abtestingReport[0].rateTrack + ' Rate',
                                                        "series": []
                                                    }
                                                ];
                                                var lineyAxisTicks = [];
                                                var dataA = [];
                                                var dataB = [];
                                                for (var i = 0; i < _this.openRates.length; i++) {
                                                    if (_this.openRates[i].hasOwnProperty('OpenCounta')) {
                                                        lineChartData[0].series.push({ "name": _this.openRates[i].OpenTimea, "value": parseInt(_this.openRates[i].OpenCounta) });
                                                        lineyAxisTicks.push(parseInt(_this.openRates[i].OpenCounta));
                                                    }
                                                    if (_this.openRates[i].hasOwnProperty('OpenCountb')) {
                                                        lineChartData[0].series.push({ "name": _this.openRates[i].OpenTimeb, "value": parseInt(_this.openRates[i].OpenCountb) });
                                                        lineyAxisTicks.push(parseInt(_this.openRates[i].OpenCountb));
                                                    }
                                                    if (_this.openRates[i].hasOwnProperty('OpenCounta')) {
                                                        dataA.push([_this.openRates[i].OpenTimea, parseInt(_this.openRates[i].OpenCounta)]);
                                                    }
                                                    else {
                                                        dataA.push(["00:00", 0]);
                                                    }
                                                    if (_this.openRates[i].hasOwnProperty('OpenCountb')) {
                                                        dataB.push([_this.openRates[i].OpenTimeb, parseInt(_this.openRates[i].OpenCountb)]);
                                                    }
                                                    else {
                                                        dataB.push(["00:00", 0]);
                                                    }
                                                }
                                                chartData.push({ "layout": lineChartData.slice(), "yAxisTicks": lineyAxisTicks, "name": _this.abtestingReport[0].rateTrack + " Rate For A/B Testing", "chartType": "'line'", "xaxis": _this.abtestingReport[0].rateTrack + " Rate", "yaxis": "Time" });
                                                // console.log(this.chartOptions.series[0].data);
                                                // this.chartOptions.series[0].data = dataA;
                                                // console.log(this.chartOptions.series[0].data);
                                                // console.log(this.chartOptions.series[1].data);
                                                // this.chartOptions.series[1].data = dataB;
                                                // console.log(this.chartOptions.series[1].data);
                                                // this.chartOptions.xAxis.tickInterval = (10000*60);
                                                // let senddate = this.abtestingReport[0].sendDate.split('-');
                                                // let enddate = this.abtestingReport[0].endTime.split('-');
                                                // this.chartOptions.xAxis.min = Date.UTC(senddate[0], senddate[1], senddate[2], 0, 0, 0);
                                                // this.chartOptions.xAxis.max = Date.UTC(enddate[0], enddate[1], enddate[2], 0, 0, 0);
                                                // this.chartOptions.plotOptions['series'].pointInterval = (10000*60);
                                                // this.chartOptions.plotOptions['series'].pointStart = Date.UTC(senddate[0], senddate[1], senddate[2], 0, 0, 0);
                                                //console.log(senddate[0]+','+ parseInt(senddate[1] - 1)+','+ senddate[2]);
                                                highcharts__WEBPACK_IMPORTED_MODULE_3__["setOptions"]({
                                                    time: {
                                                        timezoneOffset: parseInt(timeval_2[0]) * 60
                                                    }
                                                });
                                                _this.chartOptions = {
                                                    title: {
                                                        text: _this.abtestingReport[0].rateTrack + ' Rate'
                                                    },
                                                    chart: {
                                                        type: 'spline'
                                                    },
                                                    xAxis: {
                                                        type: 'datetime'
                                                    },
                                                    series: [{
                                                            data: dataA,
                                                            pointStart: Date.UTC((senddate_2[0]), month_2, (senddate_2[2])),
                                                            pointInterval: 10000 * 60,
                                                            name: 'version A'
                                                        },
                                                        {
                                                            data: dataB,
                                                            pointStart: Date.UTC((senddate_2[0]), month_2, (senddate_2[2])),
                                                            pointInterval: 10000 * 60,
                                                            name: 'version B'
                                                        }]
                                                };
                                                _this.loadChart = true;
                                            }
                                            console.log(_this.chartOptions);
                                        }
                                        if (_this.abtestingReport[0].rateTrack == 'click') {
                                            _this.clickRates = data['reports']['click'];
                                            if (_this.clickRates.length > 0) {
                                                var dataA = [];
                                                var dataB = [];
                                                for (var i = 0; i < _this.clickRates.length; i++) {
                                                    if (_this.clickRates[i].hasOwnProperty('linkCounta')) {
                                                        dataA.push([_this.clickRates[i].ClickTimea, parseInt(_this.clickRates[i].linkCounta)]);
                                                    }
                                                    else {
                                                        dataA.push(["00:00", 0]);
                                                    }
                                                    if (_this.clickRates[i].hasOwnProperty('linkCountb')) {
                                                        dataB.push([_this.clickRates[i].ClickTimeb, parseInt(_this.clickRates[i].linkCountb)]);
                                                    }
                                                    else {
                                                        dataB.push(["00:00", 0]);
                                                    }
                                                }
                                                _this.chartOptions = {
                                                    title: {
                                                        text: _this.abtestingReport[0].rateTrack + ' Rate'
                                                    },
                                                    chart: {
                                                        type: 'spline'
                                                    },
                                                    xAxis: {
                                                        type: 'datetime'
                                                    },
                                                    series: [{
                                                            data: dataA,
                                                            pointStart: Date.UTC(parseInt(senddate_2[0]), month_2, parseInt(senddate_2[2])),
                                                            pointInterval: 10000 * 60,
                                                            name: 'version A'
                                                        },
                                                        {
                                                            data: dataB,
                                                            pointStart: Date.UTC(parseInt(senddate_2[0]), month_2, parseInt(senddate_2[2])),
                                                            pointInterval: 10000 * 60,
                                                            name: 'version B'
                                                        }]
                                                };
                                                _this.loadChart = true;
                                            }
                                        }
                                        if (_this.abtestingReport[0].rateTrack == 'unsubscriber') {
                                            _this.unsubscribers = data['reports']['unsubscribe'];
                                            if (_this.unsubscribers.length > 0) {
                                                var dataA = [];
                                                var dataB = [];
                                                for (var i = 0; i < _this.unsubscribers.length; i++) {
                                                    if (_this.unsubscribers[i].hasOwnProperty('unsubscribeCountA')) {
                                                        dataA.push([_this.unsubscribers[i].Timea, parseInt(_this.unsubscribers[i].unsubscribeCountA)]);
                                                    }
                                                    else {
                                                        dataA.push(["00:00", 0]);
                                                    }
                                                    if (_this.unsubscribers[i].hasOwnProperty('unsubscribeCountB')) {
                                                        dataB.push([_this.unsubscribers[i].Timeb, parseInt(_this.unsubscribers[i].unsubscribeCountB)]);
                                                    }
                                                    else {
                                                        dataB.push(["00:00", 0]);
                                                    }
                                                }
                                                _this.chartOptions = {
                                                    title: {
                                                        text: _this.abtestingReport[0].rateTrack + ' Rate'
                                                    },
                                                    chart: {
                                                        type: 'spline'
                                                    },
                                                    xAxis: {
                                                        type: 'datetime'
                                                    },
                                                    series: [{
                                                            data: dataA,
                                                            pointStart: Date.UTC(parseInt(senddate_2[0]), month_2, parseInt(senddate_2[2])),
                                                            pointInterval: 10000 * 60,
                                                            name: 'version A'
                                                        },
                                                        {
                                                            data: dataB,
                                                            pointStart: Date.UTC(parseInt(senddate_2[0]), month_2, parseInt(senddate_2[2])),
                                                            pointInterval: 10000 * 60,
                                                            name: 'version B'
                                                        }]
                                                };
                                                console.log(JSON.stringify(_this.chartOptions));
                                                _this.loadChart = true;
                                            }
                                        }
                                    }
                                    console.log('2-' + JSON.stringify(_this.chartOptions));
                                });
                            }
                        });
                    }
                }
            });
            this.newsLetterService.getabtestingResult(this.newsletterId).then(function (data) {
                _this.campaignOverView = '';
                if (data['status'] == 'success') {
                    _this.campaignOverView = data['newsletter'][0];
                    console.log(_this.campaignOverView);
                }
                else {
                    _this.campaignOverView = '';
                }
            });
        }
    };
    AbtestingStatsComponent.prototype.selectData = function (value) {
        var _this = this;
        this.SelectedTab = value.nextId;
        ////this.spinner.show();
        if (value.nextId == 'Overview') {
            this.abtestingStatisticsService.getReportById(this.newsletterId).then(function (data) {
                if (data['status']) {
                    //document.getElementById('messageTemplate').innerHTML = JSON.parse(data['reports'][0]['message']);
                    _this.newsletterDetail = JSON.parse(data['reports'][0]['message']);
                    _this.newsletterDate = data['reports'][0]['date'];
                    _this.subject = data['reports'][0]['subject'];
                    _this.list = data['reports'][0]['list'];
                    _this.totalSent = data['reports'][0]['totalSent'];
                    _this.notSent = data['reports'][0]['notSent'];
                    _this.noOfUsers = data['reports'][0]['numberUsers'];
                    _this.sent = data['reports'][0]['noOfUsers'] - data['reports'][0]['totalSent'];
                    _this.totalSentPerc = ((data['reports'][0]['totalSent'] / data['reports'][0]['numberUsers']) * 100); //(((data['reports'][0]['totalSent'] - data['reports'][0]['notSent']) / data['reports'][0]['totalSent']) * 100);
                    _this.notSentPerc = ((data['reports'][0]['notSent'] / data['reports'][0]['numberUsers']) * 100); //((data['reports'][0]['notSent'] / data['reports'][0]['totalSent']) * 100);
                    _this.clickCount = data['reports'][0]['clickCount'];
                }
            }, function (error) {
            });
            this.abtestingStatisticsService.getclickCounts(this.newsletterId).then(function (data) {
                if (data['status'] = 'success') {
                    _this.links = data['reports'];
                    _this.openCount = data['reports'][0]['openCount'];
                }
                else {
                    _this.links = [];
                    _this.openCount = [];
                }
            }, function (error) {
            });
            this.abtestingStatisticsService.getabtestingEmailDomain(this.newsletterId).then(function (data) {
                if (data['status'] = 'success') {
                    _this.domains = data['reports'];
                }
                else {
                    _this.domains = [];
                }
            }, function (error) {
            });
            this.abtestingStatisticsService.getOpenSubscriberList(this.newsletterId).then(function (data) {
                if (data['status'] = 'success') {
                    _this.openSubscribers = data['reports'];
                }
            }, function (error) {
            });
            this.abtestingStatisticsService.getClickSubscriberList(this.newsletterId).then(function (data) {
                if (data['status'] = 'success') {
                    _this.clickSubscribers = data['reports'];
                }
            }, function (error) {
            });
            this.abtestingStatisticsService.getUnSubscriberList(this.newsletterId).then(function (data) {
                if (data['status'] = 'success') {
                    _this.campaignUnsubscribers = data['reports'];
                }
            }, function (error) {
            });
        }
        else if (value.nextId == 'Link') {
            this.abtestingStatisticsService.getReportById(this.newsletterId).then(function (data) {
                if (data['status']) {
                    //document.getElementById('messageTemplate').innerHTML = JSON.parse(data['reports'][0]['message']);
                    _this.newsletterDetail = JSON.parse(data['reports'][0]['message']);
                    _this.newsletterDate = data['reports'][0]['date'];
                    _this.subject = data['reports'][0]['subject'];
                    _this.list = data['reports'][0]['list'];
                    _this.totalSent = data['reports'][0]['totalSent'];
                    _this.notSent = data['reports'][0]['notSent'];
                    _this.noOfUsers = data['reports'][0]['numberUsers'];
                    _this.sent = data['reports'][0]['totalSent'] - data['reports'][0]['notSent'];
                    _this.totalSentPerc = (((data['reports'][0]['totalSent'] - data['reports'][0]['notSent']) / data['reports'][0]['totalSent']) * 100);
                    _this.notSentPerc = ((data['reports'][0]['notSent'] / data['reports'][0]['totalSent']) * 100);
                    _this.clickCount = data['reports'][0]['clickCount'];
                    //console.log(data['reports']);
                }
            }, function (error) {
            });
            this.abtestingStatisticsService.getclickCounts(this.newsletterId).then(function (data) {
                if (data['status'] = 'success') {
                    _this.links = data['reports'];
                    _this.openCount = data['reports'][0]['openCount'];
                }
                else {
                    _this.links = [];
                    _this.openCount = [];
                }
                //this.spinner.hide();
            }, function (error) {
            });
        }
        else if (value.nextId == 'Domain') {
            this.abtestingStatisticsService.getReportById(this.newsletterId).then(function (data) {
                if (data['status']) {
                    //document.getElementById('messageTemplate').innerHTML = JSON.parse(data['reports'][0]['message']);
                    _this.newsletterDetail = JSON.parse(data['reports'][0]['message']);
                    _this.newsletterDate = data['reports'][0]['date'];
                    _this.subject = data['reports'][0]['subject'];
                    _this.list = data['reports'][0]['list'];
                    _this.totalSent = data['reports'][0]['totalSent'];
                    _this.notSent = data['reports'][0]['notSent'];
                    _this.noOfUsers = data['reports'][0]['numberUsers'];
                    _this.sent = data['reports'][0]['totalSent'] - data['reports'][0]['notSent'];
                    _this.totalSentPerc = (((data['reports'][0]['totalSent'] - data['reports'][0]['notSent']) / data['reports'][0]['totalSent']) * 100);
                    _this.notSentPerc = ((data['reports'][0]['notSent'] / data['reports'][0]['totalSent']) * 100);
                    _this.clickCount = data['reports'][0]['clickCount'];
                    //console.log(data['reports']);
                }
            }, function (error) {
            });
            this.abtestingStatisticsService.getabtestingEmailDomain(this.newsletterId).then(function (data) {
                if (data['status'] = 'success') {
                    _this.domains = data['reports'];
                }
                else {
                    _this.domains = [];
                }
                //this.spinner.hide();
            }, function (error) {
            });
        }
        else if (value.nextId == 'Activity') {
            this.abtestingStatisticsService.getOpenSubscriberList(this.newsletterId).then(function (data) {
                if (data['status'] = 'success') {
                    _this.openSubscribers = data['reports'];
                }
                else {
                    _this.openSubscribers = [];
                }
            }, function (error) {
            });
            this.abtestingStatisticsService.getClickSubscriberList(this.newsletterId).then(function (data) {
                if (data['status'] = 'success') {
                    _this.clickSubscribers = data['reports'];
                }
                else {
                    _this.clickSubscribers = [];
                }
            }, function (error) {
            });
            this.abtestingStatisticsService.getUnSubscriberList(this.newsletterId).then(function (data) {
                if (data['status'] = 'success') {
                    _this.campaignUnsubscribers = data['reports'];
                }
                else {
                    _this.campaignUnsubscribers = [];
                }
            }, function (error) {
            });
            this.clickCountTable = false;
            this.unsubscriberTable = false;
            this.openCountTable = true;
        }
    };
    AbtestingStatsComponent.prototype.openSubscriberList = function () {
        this.clickCountTable = false;
        this.unsubscriberTable = false;
        this.openCountTable = true;
    };
    AbtestingStatsComponent.prototype.clickSubscriberList = function () {
        this.clickCountTable = true;
        this.openCountTable = false;
        this.unsubscriberTable = false;
    };
    AbtestingStatsComponent.prototype.unSubscriberList = function () {
        this.unsubscriberTable = true;
        this.clickCountTable = false;
        this.openCountTable = false;
    };
    AbtestingStatsComponent.prototype.sendCampaign = function () {
        var _this = this;
        this.newsLetterService.sendABTestingNewletterwinner(this.newsletterId, this.winnerRate).then(function (data) {
            if (data['status']) {
                _this.successSent = true;
                _this.showmanualSent = false;
                _this.subscription.unsubscribe();
            }
        });
    };
    AbtestingStatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-abtesting-stats',
            template: __webpack_require__(/*! ./abtesting-stats.component.html */ "./src/app/campaign/abtesting-stats/abtesting-stats.component.html"),
            styles: [__webpack_require__(/*! ./abtesting-stats.component.scss */ "./src/app/campaign/abtesting-stats/abtesting-stats.component.scss")]
        }),
        __metadata("design:paramtypes", [ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"], _shared_data_abtestingStats_service__WEBPACK_IMPORTED_MODULE_7__["ABTestingStatisticsService"], _shared_data_statistics_service__WEBPACK_IMPORTED_MODULE_5__["StatisticsService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_data_newsletter_service__WEBPACK_IMPORTED_MODULE_6__["newsLetterService"]])
    ], AbtestingStatsComponent);
    return AbtestingStatsComponent;
}());



/***/ }),

/***/ "./src/app/campaign/campaign-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/campaign/campaign-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CampaignRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignRoutingModule", function() { return CampaignRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newsletter/newsletter.component */ "./src/app/campaign/newsletter/newsletter.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/campaign/reports/reports.component.ts");
/* harmony import */ var _email_template_email_template_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../email-template/email-template.component */ "./src/app/email-template/email-template.component.ts");
/* harmony import */ var _abtesting_stats_abtesting_stats_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./abtesting-stats/abtesting-stats.component */ "./src/app/campaign/abtesting-stats/abtesting-stats.component.ts");
/* harmony import */ var _failed_campaign_failed_campaign_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./failed-campaign/failed-campaign.component */ "./src/app/campaign/failed-campaign/failed-campaign.component.ts");
/* harmony import */ var _email_automation_email_automation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./email-automation/email-automation.component */ "./src/app/campaign/email-automation/email-automation.component.ts");
/* harmony import */ var _keys_keys_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./keys/keys.component */ "./src/app/campaign/keys/keys.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        children: [
            {
                path: 'newsletter',
                component: _newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_2__["NewsletterComponent"],
                data: {
                    title: 'Newsletter Table'
                }
            },
            {
                path: 'reports',
                component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_3__["ReportsComponent"],
                data: {
                    title: 'Reports Table'
                }
            },
            {
                path: 'emailtemplate',
                component: _email_template_email_template_component__WEBPACK_IMPORTED_MODULE_4__["EmailTemplateComponent"],
                data: {
                    title: 'Email Template'
                }
            },
            {
                path: 'abtestingStatics',
                component: _abtesting_stats_abtesting_stats_component__WEBPACK_IMPORTED_MODULE_5__["AbtestingStatsComponent"],
                data: {
                    title: 'AB Testing Statistics'
                }
            },
            {
                path: 'failedcampaign',
                component: _failed_campaign_failed_campaign_component__WEBPACK_IMPORTED_MODULE_6__["FailedCampaignComponent"],
                data: {
                    title: 'Campaigns Failed'
                }
            },
            {
                path: 'email-automation',
                component: _email_automation_email_automation_component__WEBPACK_IMPORTED_MODULE_7__["EmailAutomationComponent"],
                data: {
                    title: 'Email Automation'
                }
            },
            {
                path: 'keys',
                component: _keys_keys_component__WEBPACK_IMPORTED_MODULE_8__["KeysComponent"],
                data: {
                    title: 'Keys'
                }
            }
        ]
    }
];
var CampaignRoutingModule = /** @class */ (function () {
    function CampaignRoutingModule() {
    }
    CampaignRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], CampaignRoutingModule);
    return CampaignRoutingModule;
}());



/***/ }),

/***/ "./src/app/campaign/campaign.module.ts":
/*!*********************************************!*\
  !*** ./src/app/campaign/campaign.module.ts ***!
  \*********************************************/
/*! exports provided: CampaignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignModule", function() { return CampaignModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _campaign_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./campaign-routing.module */ "./src/app/campaign/campaign-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newsletter/newsletter.component */ "./src/app/campaign/newsletter/newsletter.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/campaign/reports/reports.component.ts");
/* harmony import */ var _email_template_email_template_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../email-template/email-template.component */ "./src/app/email-template/email-template.component.ts");
/* harmony import */ var _multiple_campaign_multiple_campaign_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./multiple-campaign/multiple-campaign.component */ "./src/app/campaign/multiple-campaign/multiple-campaign.component.ts");
/* harmony import */ var _abtesting_stats_abtesting_stats_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./abtesting-stats/abtesting-stats.component */ "./src/app/campaign/abtesting-stats/abtesting-stats.component.ts");
/* harmony import */ var _failed_campaign_failed_campaign_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./failed-campaign/failed-campaign.component */ "./src/app/campaign/failed-campaign/failed-campaign.component.ts");
/* harmony import */ var _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/directives/match-height.directive */ "./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/dist/ng-chartist.js");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng_chartist__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es5.js");
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-archwizard */ "./node_modules/angular-archwizard/esm5/angular-archwizard.js");
/* harmony import */ var angular_highcharts_chart__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular-highcharts-chart */ "./node_modules/angular-highcharts-chart/fesm5/angular-highcharts-chart.js");
/* harmony import */ var _email_automation_email_automation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./email-automation/email-automation.component */ "./src/app/campaign/email-automation/email-automation.component.ts");
/* harmony import */ var _keys_keys_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./keys/keys.component */ "./src/app/campaign/keys/keys.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var CampaignModule = /** @class */ (function () {
    function CampaignModule() {
    }
    CampaignModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _campaign_routing_module__WEBPACK_IMPORTED_MODULE_3__["CampaignRoutingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["Ng2SmartTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_16__["NgxPaginationModule"],
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_18__["FroalaEditorModule"].forRoot(), angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_18__["FroalaViewModule"].forRoot(),
                ngx_ui_switch__WEBPACK_IMPORTED_MODULE_19__["UiSwitchModule"],
                angular_archwizard__WEBPACK_IMPORTED_MODULE_20__["ArchwizardModule"],
                angular_highcharts_chart__WEBPACK_IMPORTED_MODULE_21__["AngularHighchartsChartModule"],
                ng_chartist__WEBPACK_IMPORTED_MODULE_13__["ChartistModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_14__["NgxChartsModule"],
                _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_12__["MatchHeightModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_15__["Ng4LoadingSpinnerModule"].forRoot()
            ],
            declarations: [
                _newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_6__["NewsletterComponent"],
                _reports_reports_component__WEBPACK_IMPORTED_MODULE_7__["ReportsComponent"],
                _email_template_email_template_component__WEBPACK_IMPORTED_MODULE_8__["EmailTemplateComponent"],
                _multiple_campaign_multiple_campaign_component__WEBPACK_IMPORTED_MODULE_9__["MultipleCampaignComponent"],
                _abtesting_stats_abtesting_stats_component__WEBPACK_IMPORTED_MODULE_10__["AbtestingStatsComponent"],
                _failed_campaign_failed_campaign_component__WEBPACK_IMPORTED_MODULE_11__["FailedCampaignComponent"],
                _email_automation_email_automation_component__WEBPACK_IMPORTED_MODULE_22__["EmailAutomationComponent"],
                _keys_keys_component__WEBPACK_IMPORTED_MODULE_23__["KeysComponent"]
            ]
        })
    ], CampaignModule);
    return CampaignModule;
}());



/***/ }),

/***/ "./src/app/campaign/email-automation/email-automation.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/campaign/email-automation/email-automation.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"basic-elements\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n        <div class=\"content-header\">Email Automation</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"showTable\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\" style=\"text-align: right;\">\r\n              <p>\r\n                <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-bitbucket right\" (click)=\"addemailAutomation()\"><span class=\"ft-plus\"></span>Create Email Automation</a>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n              <ngx-datatable class=\"material\" class=\"bootstrap\" [rows]=\"emailAutomationData\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\"  [limit]=\"10\" >\r\n                <ngx-datatable-column name=\"Event\" [width]=\"200\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{row.event}}\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Template\" [width]=\"300\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                   {{row.template}}\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"List\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{row.list}}\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Segment\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{row.segment}}\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Duration\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{row.duration}}\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Action\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\r\n                    <a class=\"danger p-0\" data-original-title=\"\" title=\"\" *ngIf=\"row.status == 0\" (click)=\"deleteEmailAutomation(row.id)\">\r\n                    <i class=\"fas fa-trash font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                    <a class=\"success p-0\" data-original-title=\"\" title=\"\" *ngIf=\"row.status == 1\" (click)=\"deleteEmailAutomation(row.id)\">\r\n                    <i class=\"fas fa-check font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                  </ng-template>\r\n              </ngx-datatable-column>\r\n              </ngx-datatable>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"!showTable\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <form [formGroup]=\"automationForm\" class=\"editForm\" novalidate>\r\n              <div class=\"col-lg-12\">\r\n                <div class=\"row\">\r\n                  <label>Send a notification</label>\r\n                  <div class=\"custom-control custom-radio custom-control-inline\">\r\n                    <input class=\"custom-control-input\" type=\"radio\" name=\"immediately\" formControlName=\"immediately\" id=\"immediately\" value=\"after\" [checked]=\"true\" style=\"margin-top: 6px;\">\r\n                    <label class=\"custom-control-label\" for=\"immediately\">After</label>\r\n                  </div>\r\n                  <div class=\"col-lg-3 input-group\">\r\n                      <select class=\"form-control\" id=\"duration\" formControlName=\"duration\" [(ngModel)]=\"emailAutomation.duration\" placeholder=\"Duration\">\r\n                        <option value=\"1\">1</option>\r\n                        <option value=\"2\">2</option>\r\n                        <option value=\"3\">3</option>\r\n                        <option value=\"4\">4</option>\r\n                      </select>\r\n                  </div>\r\n                  <div class=\"col-lg-3 input-group-append\">\r\n                    <select class=\"form-control\" id=\"span\" formControlName=\"span\" [(ngModel)]=\"emailAutomation.span\" placeholder=\"Span\">\r\n                      <option value=\"hours\">Hours</option>\r\n                      <option value=\"minutes\">Minutes</option>\r\n                      <option value=\"days\">Days</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div><br />\r\n              <div class=\"col-lg-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-6\">\r\n                    <label>Select an Event</label>\r\n                    <select class=\"form-control\" formControlName=\"event\" [(ngModel)]=\"emailAutomation.event\" id=\"event\" placeholder=\"Choose Event\" (change)=\"onChange($event.target.value)\">\r\n                      <option disabled=\"true\">Select Event</option>\r\n                      <option *ngFor=\"let item of events\" value=\"{{item.id}}\">{{item.title}}</option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"col-lg-6\">\r\n                    <label>Select an Template</label>\r\n                    <select class=\"form-control\" formControlName=\"template\" [(ngModel)]=\"emailAutomation.template\" id=\"template\" placeholder=\"Choose a Template\" [attr.disabled]=\"templateSelected ? '' : null\">\r\n                      <option disabled=\"true\">Select a template</option>\r\n                      <option *ngFor=\"let auto of emailTemplate\" value=\"{{auto.id}}\">{{auto.name}}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div><br />\r\n              <div class=\"col-lg-12\">\r\n                <div class=\"row\">\r\n                  <label>Choose</label>&nbsp;&nbsp;\r\n                  <div class=\"custom-control custom-radio custom-control-inline\">\r\n                    <input class=\"custom-control-input\" type=\"radio\" name=\"select\" [(ngModel)]=\"emailAutomation.select\" formControlName=\"select\" id=\"Segment\" value=\"segment\" style=\"margin-top: 6px;\">\r\n                    <label class=\"custom-control-label\" for=\"Segment\">Segment</label>\r\n                  </div>\r\n                  <div class=\"custom-control custom-radio custom-control-inline\">\r\n                    <input class=\"custom-control-input\" type=\"radio\" name=\"select\" [(ngModel)]=\"emailAutomation.select\" formControlName=\"select\" id=\"List\" value=\"list\" style=\"margin-top: 6px;\">\r\n                    <label class=\"custom-control-label\" for=\"List\">List</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12\">\r\n                    <div *ngIf=\"emailAutomation.select == 'list'\">\r\n                      <label>Select an List</label>\r\n                      <select class=\"form-control\" formControlName=\"list\" [(ngModel)]=\"emailAutomation.list\" id=\"list\" placeholder=\"Choose List\">\r\n                        <option disabled=\"true\">Select Lists</option>\r\n                        <option *ngFor=\"let item of lists\" value=\"{{item.id}}\">{{item.name}}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-12\">\r\n                    <div *ngIf=\"emailAutomation.select == 'segment'\">\r\n                      <label>Select an Segments</label>\r\n                      <select class=\"form-control\" formControlName=\"segment\" [(ngModel)]=\"emailAutomation.segment\" id=\"segment\" placeholder=\"Choose Segment\">\r\n                        <option disabled=\"true\">Select Segments</option>\r\n                        <option *ngFor=\"let item of segmentDetails\" value=\"{{item.id}}\">{{item.name}}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div><br /><br/>\r\n              <div class=\"form-group\">\r\n                <button type=\"submit\" class=\"btn btn-danger btn-raised mr-1\" (click)=\"cancel()\">Cancel</button>\r\n                <button type=\"submit\" class=\"btn btn-success btn-raised\" (click)=\"saveEmailAutomation()\" [disabled]=\"submitted\">Create Notification</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/campaign/email-automation/email-automation.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/campaign/email-automation/email-automation.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbXBhaWduL2VtYWlsLWF1dG9tYXRpb24vZW1haWwtYXV0b21hdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/campaign/email-automation/email-automation.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/campaign/email-automation/email-automation.component.ts ***!
  \*************************************************************************/
/*! exports provided: EmailAutomationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailAutomationComponent", function() { return EmailAutomationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_data_email_template_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data/email-template.service */ "./src/app/shared/data/email-template.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _shared_data_lists_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/data/lists.service */ "./src/app/shared/data/lists.service.ts");
/* harmony import */ var _shared_data_newsletter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/data/newsletter.service */ "./src/app/shared/data/newsletter.service.ts");
/* harmony import */ var _shared_data_event_mapping_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/data/event-mapping.service */ "./src/app/shared/data/event-mapping.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EmailAutomationComponent = /** @class */ (function () {
    function EmailAutomationComponent(newsletterservice, eventmappingservice, listsservice, formBuilder, emailtemplateservice, snotifyService) {
        var _this = this;
        this.newsletterservice = newsletterservice;
        this.eventmappingservice = eventmappingservice;
        this.listsservice = listsservice;
        this.formBuilder = formBuilder;
        this.emailtemplateservice = emailtemplateservice;
        this.snotifyService = snotifyService;
        this.columns = [
            { name: 'Event' },
            { name: 'Template' },
            { name: 'List' },
            { name: 'Segment' },
            { name: 'Duration' },
            { name: 'Action' }
        ];
        //  ContentEditable: boolean = false;
        this.style = 'material';
        this.title = 'Success';
        this.body = 'Organization created successfully!';
        this.timeout = 3000;
        this.position = ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyPosition"].centerTop;
        this.progressBar = true;
        this.closeClick = true;
        this.newTop = true;
        this.backdrop = -1;
        this.dockMax = 8;
        this.blockMax = 6;
        this.pauseHover = true;
        this.titleMaxLength = 15;
        this.bodyMaxLength = 80;
        this.showTable = true;
        this.submitted = false;
        this.lists = [];
        this.emailAutomation = {
            'duration': '',
            'span': '',
            'event': '',
            'template': '',
            'list': '',
            'segment': '',
            'id': '',
            'select': ''
        };
        this.segmentDetails = [];
        this.templateSelected = false;
        this.listsservice.getNewsletterList().then(function (data) {
            if (data['status'] == 'success') {
                _this.lists = data['lists'];
            }
            else {
                _this.lists = [];
            }
        });
        this.emailtemplateservice.emailEvents().then(function (data) {
            if (data['status'] == 'success') {
                _this.events = data['emailTemplate'];
            }
            else {
                _this.events = [];
            }
        });
        this.emailtemplateservice.getEmailTemp().then(function (data) {
            if (data['status'] == 'success') {
                _this.emailTemplate = data['emailTemplate'];
            }
            else {
                _this.emailTemplate = [];
            }
        });
        this.emailtemplateservice.getEmailAutomation().then(function (data) {
            if (data['status'] == 'success') {
                _this.emailAutomationData = data['automation'];
            }
            else {
                _this.emailAutomationData = [];
            }
        });
        this.newsletterservice.getMembersSegment().then(function (data) {
            if (data['status'] == 'success') {
                _this.segmentDetails = data['newsletter'];
            }
            else {
                _this.segmentDetails = [];
            }
        });
        this.eventmappingservice.getEventMapping().then(function (data) {
            if (data['status'] == 'success') {
                _this.eveMappings = data['eventMapping'];
            }
        });
    }
    EmailAutomationComponent.prototype.ngOnInit = function () {
        this.automationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'immediately': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'segment': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'list': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'duration': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'span': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'event': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'template': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'select': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    };
    EmailAutomationComponent.prototype.deleteEmailAutomation = function (id) {
        var _this = this;
        this.emailtemplateservice.deleteEmailAutomation(id).then(function (data) {
            if (data['status'] == 'success') {
                _this.emailAutomationData = _this.emailAutomationData.filter(function (h) { return h.id != id; });
                _this.snotifyService.error('Automation Deleted Successfully', '', _this.getConfig());
            }
        });
    };
    EmailAutomationComponent.prototype.addemailAutomation = function () {
        this.showTable = false;
    };
    EmailAutomationComponent.prototype.cancel = function () {
        this.automationForm.reset();
        this.templateSelected = false;
        this.emailAutomation.duration = '';
        this.emailAutomation.span = '';
        this.emailAutomation.event = '';
        this.emailAutomation.template = '';
        this.emailAutomation.list = '';
        this.emailAutomation.segment = '';
        this.emailAutomation.id = '';
        this.emailAutomation.select = '';
        this.showTable = true;
    };
    EmailAutomationComponent.prototype.saveEmailAutomation = function () {
        var _this = this;
        this.submitted = true;
        if (this.emailAutomation.select == 'list') {
            this.emailAutomation.segment = '';
        }
        else {
            this.emailAutomation.list = '';
        }
        this.emailtemplateservice.addEmailAutomation(this.emailAutomation).then(function (data) {
            _this.submitted = true;
            if (data['status'] == 'success') {
                _this.emailtemplateservice.getEmailAutomation().then(function (data) {
                    if (data['status'] == 'success') {
                        _this.emailAutomationData = data['automation'];
                    }
                    else {
                        _this.emailAutomationData = [];
                    }
                    _this.snotifyService.success('Automation Scheduled Successfully', '', _this.getConfig());
                    _this.submitted = false;
                    _this.automationForm.reset();
                    _this.emailAutomation.duration = '';
                    _this.emailAutomation.span = '';
                    _this.emailAutomation.event = '';
                    _this.emailAutomation.template = '';
                    _this.emailAutomation.list = '';
                    _this.emailAutomation.segment = '';
                    _this.emailAutomation.id = '';
                    _this.emailAutomation.select = '';
                    _this.showTable = true;
                });
            }
        });
    };
    EmailAutomationComponent.prototype.onChange = function (value) {
        for (var i = 0; i < this.eveMappings.length; i++) {
            if (value == this.eveMappings[i]['event']) {
                this.snotifyService.success('Event Mapping is already done, if you need to change the template go to event mapping and edit the mapping in the table given.', '', this.getConfig());
                this.emailAutomation.template = this.eveMappings[i]['template'];
                this.templateSelected = true;
                break;
            }
            else {
                this.emailAutomation.template = '';
                this.templateSelected = false;
            }
        }
    };
    EmailAutomationComponent.prototype.getConfig = function () {
        this.snotifyService.setDefaults({
            global: {
                newOnTop: this.newTop,
                maxAtPosition: this.blockMax,
                maxOnScreen: this.dockMax,
            }
        });
        return {
            bodyMaxLength: this.bodyMaxLength,
            titleMaxLength: this.titleMaxLength,
            backdrop: this.backdrop,
            position: this.position,
            timeout: this.timeout,
            showProgressBar: this.progressBar,
            closeOnClick: this.closeClick,
            pauseOnHover: this.pauseHover
        };
    };
    EmailAutomationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email-automation',
            template: __webpack_require__(/*! ./email-automation.component.html */ "./src/app/campaign/email-automation/email-automation.component.html"),
            styles: [__webpack_require__(/*! ./email-automation.component.scss */ "./src/app/campaign/email-automation/email-automation.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_data_newsletter_service__WEBPACK_IMPORTED_MODULE_5__["newsLetterService"], _shared_data_event_mapping_service__WEBPACK_IMPORTED_MODULE_6__["EventMappingService"], _shared_data_lists_service__WEBPACK_IMPORTED_MODULE_4__["ListsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _shared_data_email_template_service__WEBPACK_IMPORTED_MODULE_2__["EmailTemplateService"], ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"]])
    ], EmailAutomationComponent);
    return EmailAutomationComponent;
}());



/***/ }),

/***/ "./src/app/campaign/failed-campaign/failed-campaign.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/campaign/failed-campaign/failed-campaign.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"basic-elements\">\r\n  <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n          <div class=\"content-header\">Failed Campaigns</div>\r\n      </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-tabset (tabChange)=\"selectData($event)\">\r\n              <ngb-tab title=\"Normal Campaign\" id=\"normal\" active=\"SelectedTab == 'normal'\">\r\n                <ng-template ngbTabContent>\r\n                    <ngx-datatable class=\"material\" class=\"bootstrap\" [rows]=\"campaignDetails\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [sorts]=\"[{prop: ['name', 'subject', 'status', 'date'], dir: 'desc'}]\" [limit]=\"10\">\r\n                      <ngx-datatable-column name=\"Name\">\r\n                          <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                              {{getName(row.name)}}\r\n                          </ng-template>\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column name=\"Subject\">\r\n                          <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                              {{row.subject}}\r\n                          </ng-template>\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column name=\"Status\">\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            {{row.status}}\r\n                        </ng-template>\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column name=\"Date\">\r\n                          <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                              {{row.date | date: 'MM/dd/yyyy'}}\r\n                          </ng-template>\r\n                      </ngx-datatable-column>\r\n                      <!-- <ngx-datatable-column name=\"Action\">\r\n                          <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                              <a class=\"info p-0\" (click)=\"sendnewsletter(row.id);\" *ngIf=\"row.status == 'Pending'\"><i class=\"far fa-paper-plane font-medium-3 mr-2\"></i></a>\r\n                              <a class=\"warning p-0\" *ngIf=\"row.status == 'Scheduled'\"><i class=\"far fa-clock font-medium-3 mr-2\"></i></a>\r\n                              <a class=\"success p-0\" *ngIf=\"row.status == 'Sent'\"><i class=\"far fa-check-square font-medium-3 mr-2\"></i></a>\r\n                              <a class=\"danger p-0\" *ngIf=\"row.status == 'Pending'\" (click)=\"EditNewsletter(row.id);\"><i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i></a>\r\n                              <a class=\"Info p-0\" (click)=\"CopyNewsletter(row.id);\"><i class=\"fas fa-copy font-medium-3 mr-2\"></i></a>\r\n                          </ng-template>\r\n                      </ngx-datatable-column> -->\r\n                    </ngx-datatable>\r\n                </ng-template>\r\n              </ngb-tab>\r\n              <ngb-tab title=\"A/B Testing Campaign\" id=\"abtesting\" active=\"SelectedTab == 'abtesting'\">\r\n                <ng-template ngbTabContent>\r\n                  <ngx-datatable class=\"material bootstrap\" [rows]=\"abcampaignDetails\" [columns]=\"adtestingcolumns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [scrollbarH]=\"true\" [limit]=\"10\" [sorts]=\"[{prop: ['name', 'subject', 'status', 'date'], dir: 'desc'}]\" [limit]=\"10\">\r\n                    <ngx-datatable-column name=\"Name\" [width]=\"300\">\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            {{getName(row.name)}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column name=\"Subject\" [width]=\"300\">\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <p *ngIf=\"row.subjecta != ''\">Subject A - {{row.subjecta}}</p><br/>\r\n                            <p *ngIf=\"row.subjectb != ''\">Subject B - {{row.subjectb}}</p>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column name=\"From\" [width]=\"300\">\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            <p *ngIf=\"row.froma != ''\">From A - {{row.froma}}</p><br/>\r\n                            <p *ngIf=\"row.fromb != ''\">From B - {{row.fromb}}</p>\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column name=\"Campaign Winner Type\" [width]=\"300\">\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            {{row.rateTrack}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column name=\"Campaign A/B Testing On\" [width]=\"300\">\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            {{row.abtestingOn}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column name=\"Testing Time\" [width]=\"300\">\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                            {{row.time}}\r\n                        </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column name=\"Status\" [width]=\"300\">\r\n                      <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                          {{row.status}}\r\n                      </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <!-- <ngx-datatable-column name=\"Date\" [width]=\"300\">\r\n                      <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                          {{row.date | date: 'MM/dd/yyyy'}}\r\n                      </ng-template>\r\n                    </ngx-datatable-column> -->\r\n                  </ngx-datatable>\r\n                </ng-template>\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/campaign/failed-campaign/failed-campaign.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/campaign/failed-campaign/failed-campaign.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbXBhaWduL2ZhaWxlZC1jYW1wYWlnbi9mYWlsZWQtY2FtcGFpZ24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/campaign/failed-campaign/failed-campaign.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/campaign/failed-campaign/failed-campaign.component.ts ***!
  \***********************************************************************/
/*! exports provided: FailedCampaignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailedCampaignComponent", function() { return FailedCampaignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_newsletter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/data/newsletter.service */ "./src/app/shared/data/newsletter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FailedCampaignComponent = /** @class */ (function () {
    function FailedCampaignComponent(newsletterservice) {
        this.newsletterservice = newsletterservice;
        this.columns = [
            { name: 'Name' },
            { name: 'Subject' },
            { name: 'Status' },
            { name: 'Date' }
        ];
        this.adtestingcolumns = [
            { name: 'Name' },
            { name: 'Subject' },
            { name: 'From' },
            { name: 'Campaign Winner Type' },
            { name: 'Campaign A/B Testing On' },
            { name: 'Testing Time' },
            { name: 'Status' }
        ];
    }
    FailedCampaignComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsletterservice.getFailedCampaigns().then(function (data) {
            if (data['status']) {
                _this.campaignDetails = data['newsletter']['normal'];
                _this.abcampaignDetails = data['newsletter']['abtesting'];
            }
        });
    };
    FailedCampaignComponent.prototype.getName = function (name) {
        if (!name)
            return '';
        if (name.length <= 20) {
            return name;
        }
        return name.substr(0, 20) + '...';
    };
    FailedCampaignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-failed-campaign',
            template: __webpack_require__(/*! ./failed-campaign.component.html */ "./src/app/campaign/failed-campaign/failed-campaign.component.html"),
            styles: [__webpack_require__(/*! ./failed-campaign.component.scss */ "./src/app/campaign/failed-campaign/failed-campaign.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_data_newsletter_service__WEBPACK_IMPORTED_MODULE_1__["newsLetterService"]])
    ], FailedCampaignComponent);
    return FailedCampaignComponent;
}());



/***/ }),

/***/ "./src/app/campaign/keys/keys.component.html":
/*!***************************************************!*\
  !*** ./src/app/campaign/keys/keys.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"inputForm\">\r\n<div class=\"col-md-12\">\r\n<div class=\"form-group\">\r\n  <label for=\"basicInput\">API Key</label>\r\n  <input type=\"text\" class=\"form-control\" formControlName=\"api\">\r\n</div>\r\n</div>\r\n\r\n<div class=\"col-md-12\">\r\n<div class=\"form-group\">\r\n<label for=\"basicInput\">Secret Key</label>\r\n<input type=\"text\" class=\"form-control\"  formControlName=\"secret\" >\r\n</div>\r\n</div>\r\n\r\n\r\n<div formArrayName=\"whitelist\">\r\n<div *ngFor=\"let tech of inputForm.controls.whitelist.controls; let i = index\"  [formGroupName]=\"i\" >\r\n  <div class = \"row\">\r\n<div class=\"col-md-10\">\r\n<label for=\"basicInput\"> Whitelist IPs</label>\r\n<input type=\"text\" class=\"form-control\"  formControlName=\"whitelist\" >\r\n</div>\r\n<button class=\"btn btn-danger mr-1 btn-fab\" style=\"margin-bottom: 0.3rem; margin-top: 2rem; margin-right: 3rem;\"\r\n(click)=\"removeSetCondition(i)\"><i class=\"fa fa-times\"></i></button>\r\n</div>\r\n</div>\r\n\r\n<button type=\"button\" class=\"btn btn-outline-primary btn-block btn-raised\" (click)=\"addSetCondition()\">Add More</button>\r\n</div>\r\n<div style=\"text-align: right;\">\r\n<button type=\"submit\" class=\"btn btn-success btn-raised\" id=\"save_{{push}}\" (click)=\" save()\">Save Notification</button>\r\n</div>\r\n </form>\r\n"

/***/ }),

/***/ "./src/app/campaign/keys/keys.component.scss":
/*!***************************************************!*\
  !*** ./src/app/campaign/keys/keys.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbXBhaWduL2tleXMva2V5cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/campaign/keys/keys.component.ts":
/*!*************************************************!*\
  !*** ./src/app/campaign/keys/keys.component.ts ***!
  \*************************************************/
/*! exports provided: KeysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysComponent", function() { return KeysComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_data_email_template_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/data/email-template.service */ "./src/app/shared/data/email-template.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KeysComponent = /** @class */ (function () {
    function KeysComponent(_FB, emailtemplateservice, http) {
        this._FB = _FB;
        this.emailtemplateservice = emailtemplateservice;
        this.http = http;
        this.API = '';
        this.Secret = '';
    }
    KeysComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inputForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'api': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'secret': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            //'whitelist': new FormControl(null, [Validators.required]),
            'whitelist': this._FB.array([
                this.initMapFields()
            ]),
        });
        this.emailtemplateservice.apiKeys().then(function (data) {
            if (data['status'] == 'success') {
                _this.inputForm.controls['secret'].setValue(data['data']);
            }
        });
    };
    KeysComponent.prototype.initMapFields = function () {
        return this._FB.group({
            whitelist: []
        });
    };
    KeysComponent.prototype.addSetCondition = function () {
        var control = this.inputForm.controls.whitelist;
        control.push(this.initMapFields());
    };
    KeysComponent.prototype.removeSetCondition = function (i) {
        var control = this.inputForm.controls.whitelist;
        control.removeAt(i);
    };
    KeysComponent.prototype.save = function () {
        this.formData = {
            API: this.inputForm.controls['api'].value,
            Secret: this.inputForm.controls['secret'].value,
            Whitelisted: this.inputForm.controls['whitelist'].value
        };
        this.emailtemplateservice.secretkey(this.formData).then(function (data) {
            console.log('key - ' + JSON.stringify(data));
            //if(data['status'] == 'success'){
        });
    };
    KeysComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-keys',
            template: __webpack_require__(/*! ./keys.component.html */ "./src/app/campaign/keys/keys.component.html"),
            styles: [__webpack_require__(/*! ./keys.component.scss */ "./src/app/campaign/keys/keys.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_data_email_template_service__WEBPACK_IMPORTED_MODULE_3__["EmailTemplateService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], KeysComponent);
    return KeysComponent;
}());



/***/ }),

/***/ "./src/app/campaign/multiple-campaign/multiple-campaign.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/campaign/multiple-campaign/multiple-campaign.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"basic-elements\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <aw-wizard #wizard navBarLayout=\"large-empty-symbols\">\r\n        <aw-wizard-step [stepTitle]=\"'Enter Details'\" [navigationSymbol]=\"{ symbol: '&#xf0c9;', fontFamily: 'FontAwesome' }\">\r\n          <form #mainForm=\"ngForm\" class=\"editForm\" novalidate>\r\n            <div class=\"form-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"name\">Name</label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"abtest.name\" name=\"name\" [ngClass]=\"{ 'is-invalid': mainForm.submitted && name.invalid }\" required>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"name\">Select Test Type</label>\r\n                    <div class=\"custom-control custom-radio custom-control-inline\">\r\n                      <input type=\"radio\" id=\"customRadioInline1\" name=\"multipleData\" [(ngModel)]=\"abtest.multipleData\" value=\"subject\" class=\"custom-control-input\" [ngClass]=\"{ 'is-invalid': mainForm.submitted && multipleData.invalid }\" required>\r\n                      <label class=\"custom-control-label\" for=\"customRadioInline1\">Subject</label>\r\n                    </div>\r\n                    <div class=\"custom-control custom-radio custom-control-inline\">\r\n                      <input type=\"radio\" id=\"customRadioInline2\" name=\"multipleData\" [(ngModel)]=\"abtest.multipleData\" value=\"from\" class=\"custom-control-input\" [ngClass]=\"{ 'is-invalid': mainForm.submitted && multipleData.invalid }\" required>\r\n                      <label class=\"custom-control-label\" for=\"customRadioInline2\">From</label>\r\n                    </div>\r\n                    <div class=\"custom-control custom-radio custom-control-inline\">\r\n                      <input type=\"radio\" id=\"customRadioInline3\" name=\"multipleData\" [(ngModel)]=\"abtest.multipleData\" value=\"body\" class=\"custom-control-input\" [ngClass]=\"{ 'is-invalid': mainForm.submitted && multipleData.invalid }\" required>\r\n                      <label class=\"custom-control-label\" for=\"customRadioInline3\">Body</label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                      <label>From</label>\r\n                      <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\" id=\"basic-addon1\" *ngIf=\"abtest.multipleData == 'from'\">A</span>\r\n                        </div>\r\n                        <input class=\"form-control\" [(ngModel)]=\"abtest.froma\" name=\"froma\" #froma=\"ngModel\" type=\"email\" email ngModel required>\r\n                      </div>\r\n                      <small class=\"form-text text-muted danger\" *ngIf=\"!froma.valid && (froma.dirty || froma.touched)\">Please enter a valid email!</small>\r\n                      <div  *ngIf=\"abtest.multipleData == 'from'\">\r\n                        <div class=\"input-group\">\r\n                          <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\" id=\"basic-addon1\">B</span>\r\n                          </div>\r\n                          <input class=\"form-control\"  [(ngModel)]=\"abtest.fromb\" name=\"fromb\" #fromb=\"ngModel\" type=\"email\" email ngModel required>\r\n                        </div>\r\n                        <small class=\"form-text text-muted danger\" *ngIf=\"!fromb.valid && (fromb.dirty || fromb.touched)\">Please enter a valid email!</small>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                      <label>Subject</label>\r\n                      <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\" id=\"basic-addon1\" *ngIf=\"abtest.multipleData == 'subject'\">A</span>\r\n                        </div>\r\n                        <input class=\"form-control\"  [(ngModel)]=\"abtest.subjecta\" name=\"subjecta\" type=\"text\" [ngClass]=\"{ 'is-invalid': mainForm.submitted && subjecta.invalid }\" required>\r\n                      </div>\r\n                      <small class=\"form-text text-muted danger\" *ngIf=\"mainForm.submitted && subjecta.invalid\">This field is required!</small>\r\n                      <div class=\"input-group\" *ngIf=\"abtest.multipleData == 'subject'\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\" id=\"basic-addon1\">B</span>\r\n                        </div>\r\n                        <input class=\"form-control\"  [(ngModel)]=\"abtest.subjectb\" name=\"subjectb\" type=\"text\" [ngClass]=\"{ 'is-invalid': mainForm.submitted && subjectb.invalid }\" required>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                      <label>Select value</label>\r\n                      <select class=\"form-control\" name=\"membersCol\" [(ngModel)]=\"abtest.membersCol\" [ngClass]=\"{ 'is-invalid': mainForm.submitted && membersCol.invalid }\" required>\r\n                        <option value=\"\">Select Column</option>\r\n                        <option *ngFor=\"let column of memberscols\" value=\"{{column.value}}\">{{column.text.split('_')[0] | titlecase}} {{column.text.split('_')[1] | titlecase}}</option>\r\n                      </select>\r\n                  </div>\r\n                  <div class=\"form-group text-center space-20\">\r\n                      <!-- <button type=\"submit\" class=\"btn btn-danger btn-raised mr-1\" (click)=\"cancel()\">Cancel</button> -->\r\n                      <button uiSref=\"result\" type=\"button\" class=\"btn btn-raised btn-success mr-1\" [disabled]=\"!mainForm.valid\" awNextStep>\r\n                          Next\r\n                          <span style=\"margin-left:10px;\">\r\n                              <i class=\"ft-chevron-right\"></i>\r\n                          </span>\r\n                      </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </aw-wizard-step>\r\n        <aw-wizard-step [stepTitle]=\"'Choose Template'\" [navigationSymbol]=\"{ symbol: '&#xf0c9;', fontFamily: 'FontAwesome' }\">\r\n            <form #TemplateForm=\"ngForm\" class=\"editForm\" novalidate  *ngIf=\"abtest.multipleData == 'body'\">\r\n                <div class='row'>\r\n                  <div class=\"col-md-12\">\r\n                    <div class='row'>\r\n                      <div class='col-6'>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-lg-12\">\r\n                            <fieldset class=\"form-group\">\r\n                              <label>Choose Template</label>\r\n                              <select class=\"form-control\" [(ngModel)]=\"abtest.templatea\"  name=\"templatea\" (change)=\"displayTemplate($event.target.value, 'a')\" [ngClass]=\"{ 'is-invalid': TemplateForm.submitted && templatea.invalid }\" required>\r\n                                <option value=\"\">Choose Template</option>\r\n                                <option *ngFor=\"let template of emailTemplates\" value=\"{{template.id}}\">{{template.name}}</option>\r\n                              </select>\r\n                            </fieldset>\r\n                          </div>\r\n                          <div class=\"col-lg-12\">\r\n                            <label>Email Content *</label>\r\n                            <fieldset class=\"form-group\">\r\n                              <div [froalaEditor]=\"optionsa\" #my_editora  name=\"bodya\" [(ngModel)]=\"abtest.bodya\" [ngClass]=\"{ 'is-invalid': TemplateForm.submitted && bodya.invalid }\" required></div>\r\n                            </fieldset>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-6\">\r\n                      <div class=\"row\" *ngIf=\"abtest.bodya != ''\">\r\n                        <div class=\"col-lg-12\">\r\n                          <fieldset class=\"form-group\">\r\n                            <label>Choose Template</label>\r\n                            <select class=\"form-control\" [(ngModel)]=\"abtest.templateb\"  name=\"templateb\" (change)=\"displayTemplate($event.target.value, 'b')\" [ngClass]=\"{ 'is-invalid': TemplateForm.submitted && templateb.invalid }\" required>\r\n                              <option value=\"\">Choose Template</option>\r\n                              <option *ngFor=\"let template of emailTemplates\" value=\"{{template.id}}\">{{template.name}}</option>\r\n                            </select>\r\n                          </fieldset>\r\n                        </div>\r\n                        <div class=\"col-lg-12\">\r\n                          <label>Email Content *</label>\r\n                          <fieldset class=\"form-group\">\r\n                            <div [froalaEditor]=\"optionsb\" #my_editorb  name=\"bodyb\" [(ngModel)]=\"abtest.bodyb\" [ngClass]=\"{ 'is-invalid': TemplateForm.submitted && bodyb.invalid }\" required></div>\r\n                          </fieldset>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"form-group text-center space-20\">\r\n                        <button uiSref=\"Main\" type=\"button\" class=\"btn btn-raised btn-secondary mr-1\" awPreviousStep>\r\n                            <span style=\"margin-right:10px;\">\r\n                                <i class=\"ft-chevron-left\"></i>\r\n                            </span> Previous</button>\r\n                        <button type=\"button\" uiSref=\"work\" class=\"btn btn-info btn-raised\" [disabled]=\"!TemplateForm.valid\" awNextStep>\r\n                            Next\r\n                            <span style=\"margin-left:10px;\">\r\n                                <i class=\"ft-chevron-right\"></i>\r\n                            </span>\r\n                        </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n            </form>\r\n            <form #TemplateForm=\"ngForm\" class=\"editForm\" novalidate  *ngIf=\"abtest.multipleData != 'body'\">\r\n                <div class='row'>\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"col-lg-12\">\r\n                      <fieldset class=\"form-group\">\r\n                        <label>Choose Template</label>\r\n                        <select class=\"form-control\" [(ngModel)]=\"abtest.templatea\"  name=\"templatea\" (change)=\"displayTemplate($event.target.value, 'a')\" [ngClass]=\"{ 'is-invalid': TemplateForm.submitted && templatea.invalid }\" required>\r\n                          <option value=\"\">Choose Template</option>\r\n                          <option *ngFor=\"let template of emailTemplates\" value=\"{{template.id}}\">{{template.name}}</option>\r\n                        </select>\r\n                      </fieldset>\r\n                    </div>\r\n                    <div class=\"col-lg-12\">\r\n                      <label>Email Content *</label>\r\n                      <fieldset class=\"form-group\">\r\n                        <div [froalaEditor]=\"optionsa\" #my_editora  name=\"bodya\" [(ngModel)]=\"abtest.bodya\" [ngClass]=\"{ 'is-invalid': TemplateForm.submitted && bodya.invalid }\" required></div>\r\n                      </fieldset>\r\n                    </div>\r\n                    <div class=\"form-group text-center space-20\">\r\n                        <button uiSref=\"Main\" type=\"button\" class=\"btn btn-raised btn-secondary mr-1\" awPreviousStep>\r\n                            <span style=\"margin-right:10px;\">\r\n                                <i class=\"ft-chevron-left\"></i>\r\n                            </span> Previous</button>\r\n                        <button type=\"button\" uiSref=\"work\" class=\"btn btn-info btn-raised\" [disabled]=\"!TemplateForm.valid\" awNextStep>\r\n                            Next\r\n                            <span style=\"margin-left:10px;\">\r\n                                <i class=\"ft-chevron-right\"></i>\r\n                            </span>\r\n                        </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n            </form>\r\n        </aw-wizard-step>\r\n        <aw-wizard-step  [stepTitle]=\"'Split List'\" [navigationSymbol]=\"{ symbol: '&#xf0c9;', fontFamily: 'FontAwesome' }\">\r\n            <form #listForm=\"ngForm\" class=\"editForm\" novalidate>\r\n                <div class='row justify-content-center'>\r\n                    <div class='col-12'>\r\n                        <div class=\"form-group\">\r\n                          <label>Select Parameter</label>\r\n                          <select class=\"form-control\" name=\"rateTrack\" [(ngModel)]=\"abtest.rateTrack\" [ngClass]=\"{ 'is-invalid': listForm.submitted && rateTrack.invalid }\" required>\r\n                              <option value=\"Select List\">Select Parameter</option>\r\n                              <option value=\"open\">Open Rates</option>\r\n                              <option value=\"click\">Click Rates</option>\r\n                              <option value=\"unsubscriber\">UnSubscribers</option>\r\n                          </select>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                          <div class=\"custom-control custom-radio custom-control-inline\">\r\n                            <input type=\"radio\" id=\"manual\" name=\"sendingCampaign\" [(ngModel)]=\"abtest.sendingCampaign\" value=\"manual\" class=\"custom-control-input\" [ngClass]=\"{ 'is-invalid': listForm.submitted && sendingCampaign.invalid }\" required>\r\n                            <label class=\"custom-control-label\" for=\"manual\">Manual</label>\r\n                          </div>\r\n                          <div class=\"custom-control custom-radio custom-control-inline\">\r\n                            <input type=\"radio\" id=\"automatic\" name=\"sendingCampaign\" [(ngModel)]=\"abtest.sendingCampaign\" value=\"automatic\" class=\"custom-control-input\" [ngClass]=\"{ 'is-invalid': listForm.submitted && sendingCampaign.invalid }\" required>\r\n                            <label class=\"custom-control-label\" for=\"automatic\">Automatic</label>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                          <label>Select Test Hours</label>\r\n                          <select class=\"form-control\" name=\"testhrs\" [(ngModel)]=\"abtest.testhrs\" [ngClass]=\"{ 'is-invalid': listForm.submitted && testhrs.invalid }\" required>\r\n                              <option value=\"Select Hours\">Select Hours</option>\r\n                              <option *ngFor=\"let i of hours\" value=\"{{i}}\">{{i}}</option>\r\n                          </select>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                          <label>Choose Segment</label>\r\n                          <ui-switch name=\"segment\" [(ngModel)]=\"abtest.segment\"></ui-switch>\r\n                        </div>\r\n                        <div class=\"form-group\" *ngIf=\"!abtest.segment\">\r\n                          <label>Select List</label>\r\n                          <select class=\"form-control\" name=\"listid\" [(ngModel)]=\"abtest.listid\" (change)=\"displayMembers($event.target.value, $event)\" [ngClass]=\"{ 'is-invalid': listForm.submitted && listid.invalid }\" required>\r\n                              <option value=\"Select List\">Select List</option>\r\n                              <option *ngFor=\"let list of listDetails\" value=\"{{list.id}}\">{{list.name}}</option>\r\n                          </select>\r\n                          <label *ngIf=\"abtest.listid\">Total Users : {{ users }}</label>\r\n                        </div>\r\n                        <div class=\"form-group\" *ngIf=\"abtest.segment\">\r\n                          <label>Select Segment</label>\r\n                          <select class=\"form-control\" name=\"segmentVal\" [(ngModel)]=\"abtest.segmentVal\" (change)=\"displaySegmentMembers($event.target.value, $event)\" [ngClass]=\"{ 'is-invalid': listForm.submitted && listid.invalid }\" required>\r\n                              <option value=\"Select List\">Select Segment</option>\r\n                              <option *ngFor=\"let segment of segmentDetails\" value=\"{{segment.id}}\">{{segment.name}}</option>\r\n                          </select>\r\n                          <label *ngIf=\"abtest.segmentVal\">Total Users : {{ users }}</label>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                          <label for=\"selectedUserA\">Test Members Count</label>\r\n                          <input type=\"number\" min=\"1\" max=\"1000\" name=\"selectedUserA\" [(ngModel)]=\"abtest.selectedUserA\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': listForm.submitted && selectedUserA.invalid }\" required>\r\n                          <label *ngIf=\"abtest.selectedUserA\">Remaining Users : {{ users - (2 * abtest.selectedUserA)}}</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group text-center space-20\">\r\n                    <button uiSref=\"Template\" type=\"button\" class=\"btn btn-raised btn-secondary mr-1\" awPreviousStep>\r\n                        <span style=\"margin-right:10px;\">\r\n                            <i class=\"ft-chevron-left\"></i>\r\n                        </span> Previous</button>\r\n                    <button uiSref=\"result\" type=\"button\" class=\"btn btn-raised btn-success mr-1\" [disabled]=\"!listForm.valid\" awNextStep>\r\n                        Next\r\n                        <span style=\"margin-left:10px;\">\r\n                            <i class=\"ft-chevron-right\"></i>\r\n                        </span>\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </aw-wizard-step>\r\n        <aw-wizard-step [stepTitle]=\"'Send Campaign'\" [navigationSymbol]=\"{ symbol: '&#xf1d8;', fontFamily: 'FontAwesome' }\">\r\n            <form #sendCampaign=\"ngForm\" class=\"editForm\" novalidate>\r\n              <h4 class=\"head text-center\">When Would You Like To Send This Campaign?</h4>\r\n              <div class=\"col-lg-12\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-header\" style=\"padding: 0 1.5rem 0 !important;\">\r\n                    <fieldset class=\"form-group\">\r\n                      <div class=\"form-group\">\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input type=\"radio\" id=\"sendmail\" name=\"send\" [(ngModel)]=\"abtest.send\" value=\"send\" class=\"custom-control-input\"  [ngClass]=\"{ 'is-invalid': sendCampaign.submitted && send.invalid }\" required>\r\n                          <label class=\"custom-control-label\" for=\"sendmail\">Send Now</label>\r\n                        </div>\r\n                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                          <input type=\"radio\" id=\"schedulemail\" name=\"send\" [(ngModel)]=\"abtest.send\" value=\"schedule\" class=\"custom-control-input\"  [ngClass]=\"{ 'is-invalid': sendCampaign.submitted && send.invalid }\" required>\r\n                          <label class=\"custom-control-label\" for=\"schedulemail\">Schedule Date/Time</label>\r\n                        </div>\r\n                      </div>\r\n                    </fieldset>\r\n                  </div>\r\n                  <h4 class=\"form-section\"></h4>\r\n                  <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                      <div class=\"col-lg-12\" *ngIf=\"abtest.send == 'schedule'\">\r\n                        <fieldset class=\"form-group\">\r\n                          <label>This Campaign will be sent at the Date and Time specified below :- </label>\r\n                          <div class=\"col-lg-3\">\r\n                            <label>Date</label>\r\n                          </div>\r\n                          <div class=\"col-lg-9\">\r\n                            <div class=\"input-group\">\r\n                              <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" [(ngModel)]=\"abtest.scheduledate\" name=\"scheduledate\" ngbDatepicker [dayTemplate]=\"customDay\"\r\n                                [markDisabled]=\"isDisabled\" #d3=\"ngbDatepicker\" [minDate]=\"minDate\" (ngModelChange)=\"disableTimeByDate($event)\" [ngClass]=\"{ 'is-invalid': sendCampaign.submitted && scheduledate.invalid }\" required>\r\n                              <div class=\"input-group-append\">\r\n                                <div class=\"input-group-text\" (click)=\"d3.toggle()\">\r\n                                  <i class=\"fa fa-calendar\" style=\"cursor: pointer;\"></i>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-lg-3\">\r\n                            <label>Time</label>\r\n                          </div>\r\n                          <div class=\"col-lg-9\">\r\n                            <ngb-timepicker [(ngModel)]=\"abtest.time\" name=\"time\" (ngModelChange)=\"disabletime($event)\" [ngClass]=\"{ 'is-invalid': sendCampaign.submitted && time.invalid }\" required></ngb-timepicker>\r\n                          </div>\r\n                        </fieldset>\r\n                        <fieldset class=\"form-group\">\r\n                          <label>Confirmation email</label>\r\n                          <label>Send confirmation to the following email address when the campaign has been sent.</label>\r\n                          <input type=\"text\" class=\"form-control\" email name=\"confirm_email\" [(ngModel)]=\"abtest.confirm_email\"  [ngClass]=\"{ 'is-invalid': sendCampaign.submitted && confirm_email.invalid }\" required>\r\n                        </fieldset>\r\n                      </div>\r\n                      <div class=\"form-group text-center\">\r\n                          <button uiSref=\"work\" type=\"button\" class=\"btn btn-raised btn-secondary mr-1\" awPreviousStep>\r\n                              <span style=\"margin-right:10px;\">\r\n                                  <i class=\"ft-chevron-left\"></i>\r\n                              </span> Previous</button>\r\n                          <button uiSref=\"result\" type=\"button\" class=\"btn btn-raised btn-success\" (click)=\"submitCampaign('schedule')\" *ngIf=\"abtest.send == 'schedule'\" [disabled]=\"!sendCampaign.valid || submitted\">\r\n                            Schedule this Campaign   <i class=\"fas fa-spinner font-medium-4 fa fa-spin white align-middle\" *ngIf=\"submitted\"></i>\r\n                          </button>\r\n                          <button uiSref=\"result\" type=\"button\" class=\"btn btn-raised btn-success\" (click)=\"submitCampaign('send')\" *ngIf=\"abtest.send == 'send'\" [disabled]=\"!sendCampaign.valid || submitted\">\r\n                            Send Now   <i class=\"fas fa-spinner font-medium-4 fa fa-spin white align-middle\" *ngIf=\"submitted\"></i>\r\n                          </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n        </aw-wizard-step>\r\n      </aw-wizard>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/campaign/multiple-campaign/multiple-campaign.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/campaign/multiple-campaign/multiple-campaign.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".justify-content-start {\n  justify-content: center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtcGFpZ24vbXVsdGlwbGUtY2FtcGFpZ24vQzpcXFVzZXJzXFxNUlQyMFxcRGVza3RvcFxcVU1cXHVzZXJtYW5hZ2VtZW50L3NyY1xcYXBwXFxjYW1wYWlnblxcbXVsdGlwbGUtY2FtcGFpZ25cXG11bHRpcGxlLWNhbXBhaWduLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQWtDLEVBQ3JDIiwiZmlsZSI6InNyYy9hcHAvY2FtcGFpZ24vbXVsdGlwbGUtY2FtcGFpZ24vbXVsdGlwbGUtY2FtcGFpZ24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVzdGlmeS1jb250ZW50LXN0YXJ0IHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/campaign/multiple-campaign/multiple-campaign.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/campaign/multiple-campaign/multiple-campaign.component.ts ***!
  \***************************************************************************/
/*! exports provided: MultipleCampaignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleCampaignComponent", function() { return MultipleCampaignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_data_newsletter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/data/newsletter.service */ "./src/app/shared/data/newsletter.service.ts");
/* harmony import */ var _shared_data_lists_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/data/lists.service */ "./src/app/shared/data/lists.service.ts");
/* harmony import */ var _shared_data_email_template_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/data/email-template.service */ "./src/app/shared/data/email-template.service.ts");
/* harmony import */ var _shared_data_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/data/user.service */ "./src/app/shared/data/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MultipleCampaignComponent = /** @class */ (function () {
    function MultipleCampaignComponent(snotifyService, router, newsletterservice, userservice, listsservice, emailtemplateservice) {
        var _this = this;
        this.snotifyService = snotifyService;
        this.router = router;
        this.newsletterservice = newsletterservice;
        this.userservice = userservice;
        this.listsservice = listsservice;
        this.emailtemplateservice = emailtemplateservice;
        this.abtest = {
            'name': '',
            'multipleData': '',
            'froma': '',
            'fromb': '',
            'subjecta': '',
            'subjectb': '',
            'membersCol': '',
            'bodya': '',
            'bodyb': '',
            'templatea': '',
            'templateb': '',
            'listid': '',
            'selectedUserA': '',
            //'selectedUserB': '',
            'campaign_type': 'abtesting',
            'rateTrack': '',
            'sendingCampaign': '',
            'testhrs': '',
            'send': 'send',
            'scheduledate': '',
            'time': '',
            'confirm_email': '',
            'segment': '',
            'segmentVal': ''
        };
        this.showWizard = false;
        this.optionsa = {
            charCounterCount: true,
            // Set the image upload parameter.
            imageUploadParam: 'image_param',
            // Set the image upload URL.
            imageUploadURL: 'https://cockburncrc.com.au/members/usermanagement/images',
            // Additional upload params.
            imageUploadParams: { id: 'my_editora' },
            // Set request type.
            imageUploadMethod: 'POST',
            // Set max image size to 5MB.
            imageMaxSize: 5 * 1024 * 1024,
            // Allow to upload PNG and JPG.
            imageAllowedTypes: ['jpeg', 'jpg', 'png'],
            events: {
                'froalaEditor.initialized': function () {
                    console.log('initialized');
                },
                'froalaEditor.image.beforeUpload': function (e, editor, images) {
                    //Your code
                    if (images.length) {
                        // Create a File Reader.
                        var reader = new FileReader();
                        // Set the reader to insert images when they are loaded.
                        reader.onload = function (ev) {
                            var result = ev.target['result'];
                            editor.image.insert(result, null, null, editor.image.get());
                            console.log(ev, editor.image, ev.target['result']);
                        };
                        // Read image as base64.
                        reader.readAsDataURL(images[0]);
                    }
                    // Stop default upload chain.
                    return false;
                }
            }
        };
        this.optionsb = {
            charCounterCount: true,
            // Set the image upload parameter.
            imageUploadParam: 'image_param',
            // Set the image upload URL.
            imageUploadURL: 'https://cockburncrc.com.au/members/usermanagement/images',
            // Additional upload params.
            imageUploadParams: { id: 'my_editorb' },
            // Set request type.
            imageUploadMethod: 'POST',
            // Set max image size to 5MB.
            imageMaxSize: 5 * 1024 * 1024,
            // Allow to upload PNG and JPG.
            imageAllowedTypes: ['jpeg', 'jpg', 'png'],
            events: {
                'froalaEditor.initialized': function () {
                    console.log('initialized');
                },
                'froalaEditor.image.beforeUpload': function (e, editor, images) {
                    //Your code
                    if (images.length) {
                        // Create a File Reader.
                        var reader = new FileReader();
                        // Set the reader to insert images when they are loaded.
                        reader.onload = function (ev) {
                            var result = ev.target['result'];
                            editor.image.insert(result, null, null, editor.image.get());
                            console.log(ev, editor.image, ev.target['result']);
                        };
                        // Read image as base64.
                        reader.readAsDataURL(images[0]);
                    }
                    // Stop default upload chain.
                    return false;
                }
            }
        };
        this.selectedUserA = [];
        this.selectedUserB = [];
        this.sendEmail = false;
        this.timeout = 3000;
        this.position = ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyPosition"].centerTop;
        this.progressBar = true;
        this.closeClick = true;
        this.newTop = true;
        this.backdrop = -1;
        this.dockMax = 8;
        this.blockMax = 6;
        this.pauseHover = true;
        this.titleMaxLength = 15;
        this.bodyMaxLength = 80;
        this.hours = ['30min', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        this.Sendcampaign = false;
        this.showTable = false;
        this.newsLetter = {
            'body': ''
        };
        this.segmentDetails = [];
        this.segmentUserCount = 0;
        this.submitted = false;
        var current = new Date();
        console.log(current);
        this.minDate = {
            year: current.getFullYear(),
            month: current.getMonth() + 1,
            day: current.getDate()
        };
        this.defaultTemplate = this.emailtemplateservice.getDefaultTemplate();
        this.emailtemplateservice.getNewsTemp(new Date().getTime()).then(function (data) {
            if (data['status'] == 'success') {
                _this.emailTemplates = data['emailTemplate'];
            }
        }, function (error) {
        });
        this.listsservice.getNewsletterList().then(function (data) {
            if (data['status'] == 'success') {
                _this.listDetails = data['lists'];
            }
            else {
                _this.listDetails = '';
            }
        }, function (error) {
        });
        this.userservice.getUserrColumns(new Date().getTime()).then(function (data) {
            if (data['status'] == 'success') {
                console.log(data['userColumn']);
                _this.memberscols = data['userColumn'];
            }
            else {
                _this.memberscols = '';
            }
        }, function (error) {
        });
        this.newsletterservice.getMembersSegment().then(function (data) {
            if (data['status'] == 'success') {
                _this.segmentDetails = data['newsletter'];
            }
            else {
                _this.segmentDetails = [];
            }
        });
    }
    MultipleCampaignComponent.prototype.disabletime = function (control) {
        console.log(control);
        var current = new Date();
        if (this.abtest.scheduledate != '') {
            var dates = this.abtest.scheduledate['day'] + '/' + this.abtest.scheduledate['month'] + '/' + this.abtest.scheduledate['year'];
            var currentdateformat = current.getDate() + '/' + (current.getMonth() + 1) + '/' + current.getFullYear();
            if (currentdateformat == dates) {
                if (control.hour < current.getHours()) {
                    this.abtest.time = '';
                    if (control.minute <= current.getMinutes()) {
                        this.abtest.time = '';
                    }
                }
            }
        }
    };
    MultipleCampaignComponent.prototype.disableTimeByDate = function (control, type) {
        var current = new Date();
        var dates = control.day + '/' + control.month + '/' + control.year;
        var currentdateformat = current.getDate() + '/' + (current.getMonth() + 1) + '/' + current.getFullYear();
        if (this.abtest.time != '') {
            if (currentdateformat == dates) {
                if (this.abtest.time['hour'] < current.getHours()) {
                    this.abtest.time = '';
                    if (this.abtest.time['minute'] <= current.getMinutes()) {
                        this.abtest.time = '';
                    }
                }
            }
        }
    };
    MultipleCampaignComponent.prototype.ngOnInit = function () {
        this.abTestForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'multipleData': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, null),
            'froma': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            'fromb': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            'subjecta': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, null),
            'subjectb': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, null),
        });
    };
    MultipleCampaignComponent.prototype.displayTemplate = function (value, type) {
        var _this = this;
        for (var i = 0; i < this.emailTemplates.length; i++) {
            if (this.emailTemplates[i]['id'] == value) {
                this.emailtemplateservice.getEmailTempById(value).then(function (data) {
                    console.log(data['emailTemplate']);
                    if (data['status'] == 'success') {
                        if (type == 'a') {
                            _this.abtest.bodya = data['emailTemplate'][0]['body'];
                        }
                        else {
                            _this.abtest.bodyb = data['emailTemplate'][0]['body'];
                        }
                    }
                }, function (error) {
                });
            }
            else {
                if (type == 'a') {
                    this.abtest.bodya = this.defaultTemplate;
                }
                else {
                    this.abtest.bodyb = this.defaultTemplate;
                }
            }
        }
    };
    MultipleCampaignComponent.prototype.displayMembers = function (value, event) {
        var _this = this;
        if (value != '') {
            this.userservice.getUsersSubscriptionList(value, new Date().getTime()).then(function (data) {
                console.log(data['users']);
                _this.users = data['users'].length;
            });
        }
        else {
            this.users = [];
        }
    };
    MultipleCampaignComponent.prototype.displaySegmentMembers = function (value, event) {
        var _this = this;
        if (value != "Select Segment") {
            var condition = this.segmentDetails.filter(function (h) { return h.id == value; });
            this.newsletterservice.getUserMembersSegment(condition).then(function (data) {
                if (data['status'] == 'success') {
                    if (data['newsletter'][0] == 0) {
                        _this.snotifyService.error('No Users in selected Segment to send Newsletter', '', _this.getConfig());
                        _this.abtest.segmentVal = '';
                        _this.users = [];
                    }
                    else {
                        _this.users = data['newsletter'][0];
                    }
                }
                else {
                    _this.snotifyService.error('No Users in selected Segment to send Newsletter', '', _this.getConfig());
                    _this.abtest.segmentVal = '';
                    _this.users = [];
                }
            });
        }
    };
    MultipleCampaignComponent.prototype.submitCampaign = function (type) {
        var _this = this;
        this.submitted = true;
        this.newsletterservice.saveabtestingNewletter(this.abtest, new Date().getTime()).then(function (data) {
            if (data['status']) {
                _this.newsletterId = data['id'];
                if (type == 'schedule') {
                    _this.ScheduleNewsletter();
                }
                else {
                    _this.sendCampaign();
                }
            }
        });
    };
    MultipleCampaignComponent.prototype.ScheduleNewsletter = function () {
        var _this = this;
        this.submitted = true;
        var sendCampaign = {
            'id': this.newsletterId,
            'send': this.abtest.send,
            'scheduledate': this.abtest.scheduledate,
            'time': this.abtest.time,
            'confirm_email': this.abtest.confirm_email
        };
        this.newsletterservice.ScheduleNewsletter(sendCampaign).then(function (data) {
            if (data['status']) {
                _this.snotifyService.success('Campaign Scheduled Successfully', '', _this.getConfig());
                _this.submitted = false;
                _this.router.navigate(['/campaign/reports']);
            }
        });
    };
    MultipleCampaignComponent.prototype.sendCampaign = function () {
        var _this = this;
        this.submitted = true;
        this.newsletterservice.sendABTestingNewletter(this.newsletterId).then(function (data) {
            if (data['status']) {
                console.log(data['status']);
                var val = ((_this.newsletterId * 1080) / 8000);
                var self1_1 = _this;
                var newId = window.btoa(val.toString());
                _this.snotifyService.success('Campaign Sent Successfully', '', _this.getConfig());
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    title: '<i class="fab fa-telegram"></i> Queue For immediate delivery',
                    html: '' +
                        '<ul class="list-group">' +
                        '<li class="list-group-item">Campaign Name: ' + self1_1.abtest.name + '</li>' +
                        '<li class="list-group-item">Recepients: ' + data['totalsent'] + '</li>' +
                        '<li class="list-group-item">Not Received: ' + data['notsent'] + '</li>' +
                        '<li class="list-group-item">To Be Delivered: Immediately</li>' +
                        '</ul>',
                    showCloseButton: false,
                    confirmButtonText: '<a href="#/campaign/abtestingStatics?id=' + newId + '">See Campaign Report</a>',
                    allowOutsideClick: true,
                    allowEscapeKey: true
                }).then(function (dismiss) {
                    // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                    if (dismiss.dismiss.toString() == 'overlay' || dismiss.dismiss.toString() == 'esc' || dismiss.dismiss.toString() == 'cancel' || dismiss.dismiss.toString() == 'close' || dismiss.dismiss.toString() == 'timer') {
                        self1_1.router.navigate(['/campaign/reports']);
                        self1_1.submitted = false;
                    }
                    // if (dismiss.dismiss.toString() == 'overlay' || dismiss.dismiss.toString() == 'esc' || dismiss.dismiss.toString() == 'cancel' || dismiss.dismiss.toString() == 'close' || dismiss.dismiss.toString() == 'timer') {
                    //   self1.router.navigate(['/campaign/reports']);
                    // }
                });
            }
        });
    };
    MultipleCampaignComponent.prototype.getConfig = function () {
        this.snotifyService.setDefaults({
            global: {
                newOnTop: this.newTop,
                maxAtPosition: this.blockMax,
                maxOnScreen: this.dockMax,
            }
        });
        return {
            bodyMaxLength: this.bodyMaxLength,
            titleMaxLength: this.titleMaxLength,
            backdrop: this.backdrop,
            position: this.position,
            timeout: this.timeout,
            showProgressBar: this.progressBar,
            closeOnClick: this.closeClick,
            pauseOnHover: this.pauseHover
        };
    };
    MultipleCampaignComponent.prototype.cancel = function () {
        //alert('cancel');
    };
    MultipleCampaignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multiple-campaign',
            template: __webpack_require__(/*! ./multiple-campaign.component.html */ "./src/app/campaign/multiple-campaign/multiple-campaign.component.html"),
            styles: [__webpack_require__(/*! ./multiple-campaign.component.scss */ "./src/app/campaign/multiple-campaign/multiple-campaign.component.scss")]
        }),
        __metadata("design:paramtypes", [ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _shared_data_newsletter_service__WEBPACK_IMPORTED_MODULE_5__["newsLetterService"], _shared_data_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _shared_data_lists_service__WEBPACK_IMPORTED_MODULE_6__["ListsService"], _shared_data_email_template_service__WEBPACK_IMPORTED_MODULE_7__["EmailTemplateService"]])
    ], MultipleCampaignComponent);
    return MultipleCampaignComponent;
}());



/***/ }),

/***/ "./src/app/campaign/newsletter/newsletter.component.html":
/*!***************************************************************!*\
  !*** ./src/app/campaign/newsletter/newsletter.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"basic-elements\">\r\n  <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n          <div class=\"content-header\">Newsletter</div>\r\n      </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"showTable\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          </div>\r\n          <div class=\"card-body\">\r\n              <div class=\"card-block\">\r\n                <ngb-tabset (tabChange)=\"selectData($event)\">\r\n                  <ngb-tab title=\"Normal Campaign\" id=\"normal\" active=\"SelectedTab == 'normal'\">\r\n                    <ng-template ngbTabContent>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-9 text-right\">\r\n                          <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"isCollapsed = !isCollapsed\"\r\n                                  [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\r\n                            Select Columns\r\n                          </button>\r\n                          <div id=\"collapseExample\" class=\"selected-column\" [ngbCollapse]=\"!isCollapsed\">\r\n                            <ul>\r\n                                <li *ngFor='let col of allColumns'>\r\n                                  <input\r\n                                    type='checkbox'\r\n                                    [id]=\"col.name\"\r\n                                    (click)='toggle(col)'\r\n                                    [checked]='isChecked(col)'\r\n                                  />\r\n                                  <label [attr.for]=\"col.name\">{{col.name}}</label>\r\n                                </li>\r\n                            </ul>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                          <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-bitbucket \" (click)=\"addnews()\"><span class=\"ft-plus\"></span>Create Newsletter</a>\r\n                        </div>\r\n                      </div>\r\n                      <ngx-datatable\r\n                        class ='material'\r\n                        class='bootstrap'\r\n                        [rows]='newsletterDetails'\r\n                        [columnMode]=\"'force'\"\r\n                        [headerHeight]=\"50\"\r\n                        [footerHeight]=\"50\"\r\n                        [rowHeight]=\"'auto'\"\r\n                        [limit]=\"10\">\r\n                        <ngx-datatable-column\r\n                          *ngFor=\"let col of columns\"\r\n                          [name]=\"col.name\">\r\n                        </ngx-datatable-column>\r\n                        <ngx-datatable-column name=\"Action\">\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                          <a class=\"info p-0\" (click)=\"sendnewsletter(row.id);\" *ngIf=\"row.status == 'Pending' && row.send != 'schedule'\"><i class=\"far fa-paper-plane font-medium-3 mr-2\"></i></a>\r\n                          <a class=\"warning p-0\" *ngIf=\"row.status == 'Scheduled' || row.send == 'schedule'\"><i class=\"far fa-clock font-medium-3 mr-2\"></i></a>\r\n                          <a class=\"success p-0\" *ngIf=\"row.status == 'Sent'\"><i class=\"far fa-check-square font-medium-3 mr-2\"></i></a>\r\n                          <a class=\"danger p-0\" *ngIf=\"(row.status == 'Pending' || row.status == 'Scheduled')\" (click)=\"EditNewsletter(row.id);\"><i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i></a>\r\n                          <a class=\"Info p-0\" (click)=\"CopyNewsletter(row.id);\"><i class=\"fas fa-copy font-medium-3 mr-2\"></i></a>\r\n                        </ng-template>\r\n                        </ngx-datatable-column>\r\n                        </ngx-datatable>\r\n                        <!-- <ngx-datatable class=\"material\" class=\"bootstrap\" [rows]=\"newsletterDetails\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [sorts]=\"[{prop: ['name', 'subject', 'status', 'date'], dir: 'desc'}]\" [limit]=\"10\">\r\n                          <ngx-datatable-column name=\"Name\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                  {{getName(row.name)}}\r\n                              </ng-template>\r\n                          </ngx-datatable-column>\r\n                          <ngx-datatable-column name=\"Subject\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                  {{row.subject}}\r\n                              </ng-template>\r\n                          </ngx-datatable-column>\r\n                          <ngx-datatable-column name=\"Status\">\r\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                {{row.status}}\r\n                            </ng-template>\r\n                          </ngx-datatable-column>\r\n                          <ngx-datatable-column name=\"Date\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                  {{row.date | date: 'MM/dd/yyyy'}}\r\n                              </ng-template>\r\n                          </ngx-datatable-column>\r\n                          <ngx-datatable-column name=\"Action\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                  <a class=\"info p-0\" (click)=\"sendnewsletter(row.id);\" *ngIf=\"row.status == 'Pending' && row.send != 'schedule'\"><i class=\"far fa-paper-plane font-medium-3 mr-2\"></i></a>\r\n                                  <a class=\"warning p-0\" *ngIf=\"row.status == 'Scheduled' || row.send == 'schedule'\"><i class=\"far fa-clock font-medium-3 mr-2\"></i></a>\r\n                                  <a class=\"success p-0\" *ngIf=\"row.status == 'Sent'\"><i class=\"far fa-check-square font-medium-3 mr-2\"></i></a>\r\n                                  <a class=\"danger p-0\" *ngIf=\"(row.status == 'Pending' || row.status == 'Scheduled')\" (click)=\"EditNewsletter(row.id);\"><i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i></a>\r\n                                  <a class=\"Info p-0\" (click)=\"CopyNewsletter(row.id);\"><i class=\"fas fa-copy font-medium-3 mr-2\"></i></a>\r\n                              </ng-template>\r\n                          </ngx-datatable-column>\r\n                        </ngx-datatable> -->\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                  <!-- <ngb-tab title=\"A/B Testing Campaign\" id=\"abtesting\" active=\"SelectedTab == 'abtesting'\">\r\n                    <ng-template ngbTabContent>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-9 text-right\">\r\n                            <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"isCollapsed = !isCollapsed\"\r\n                                    [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\r\n                              Select Columns\r\n                            </button>\r\n                            <div id=\"collapseExample\" class=\"selected-column\" [ngbCollapse]=\"!isCollapsed\">\r\n                              <ul>\r\n                                  <li *ngFor='let col of adtestingallcolumns'>\r\n                                    <input\r\n                                      type='checkbox'\r\n                                      [id]=\"col.name\"\r\n                                      (click)='toggleabtesting(col)'\r\n                                      [checked]='isCheckedabtesting(col)'\r\n                                    />\r\n                                    <label [attr.for]=\"col.name\">{{col.name}}</label>\r\n                                  </li>\r\n                              </ul>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-md-3\">\r\n                            <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-bitbucket \" (click)=\"addnews()\"><span class=\"ft-plus\"></span>Create Newsletter</a>\r\n                          </div>\r\n                        </div>\r\n                        <ngx-datatable\r\n                          class ='material'\r\n                          class='bootstrap'\r\n                          [rows]='newsletterDetails'\r\n                          [columnMode]=\"'force'\"\r\n                          [headerHeight]=\"50\"\r\n                          [footerHeight]=\"50\"\r\n                          [rowHeight]=\"'auto'\"\r\n                          [limit]=\"10\">\r\n                          <ngx-datatable-column\r\n                            *ngFor=\"let col of adtestingcolumns\"\r\n                            [name]=\"col.name\">\r\n                          </ngx-datatable-column>\r\n                        </ngx-datatable>\r\n                      <!-- <ngx-datatable class=\"material bootstrap\" [rows]=\"newsletterDetails\" [columns]=\"adtestingcolumns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [scrollbarH]=\"true\" [limit]=\"10\" [sorts]=\"[{prop: ['name', 'subject', 'status', 'date'], dir: 'desc'}]\" [limit]=\"10\">\r\n                        <ngx-datatable-column name=\"Name\" [width]=\"300\">\r\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                {{getName(row.name)}}\r\n                            </ng-template>\r\n                        </ngx-datatable-column>\r\n                        <ngx-datatable-column name=\"Subject\" [width]=\"300\">\r\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                <p *ngIf=\"row.subjecta != ''\">Subject A - {{row.subjecta}}</p><br/>\r\n                                <p *ngIf=\"row.subjectb != ''\">Subject B - {{row.subjectb}}</p>\r\n                            </ng-template>\r\n                        </ngx-datatable-column>\r\n                        <ngx-datatable-column name=\"From\" [width]=\"300\">\r\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                <p *ngIf=\"row.froma != ''\">From A - {{row.froma}}</p><br/>\r\n                                <p *ngIf=\"row.fromb != ''\">From B - {{row.fromb}}</p>\r\n                            </ng-template>\r\n                        </ngx-datatable-column>\r\n                        <ngx-datatable-column name=\"Campaign Winner Type\" [width]=\"300\">\r\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                {{row.rateTrack}}\r\n                            </ng-template>\r\n                        </ngx-datatable-column>\r\n                        <ngx-datatable-column name=\"Campaign A/B Testing On\" [width]=\"300\">\r\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                {{row.abtestingOn}}\r\n                            </ng-template>\r\n                        </ngx-datatable-column>\r\n                        <ngx-datatable-column name=\"Testing Time\" [width]=\"300\">\r\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                {{row.time}}\r\n                            </ng-template>\r\n                        </ngx-datatable-column>\r\n                        <ngx-datatable-column name=\"Status\" [width]=\"300\">\r\n                          <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                              {{row.status}}\r\n                          </ng-template>\r\n                        </ngx-datatable-column>\r\n                      </ngx-datatable> ->\r\n                    </ng-template>\r\n                  </ngb-tab> -->\r\n                </ngb-tabset>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  <div class=\"row\" *ngIf=\"!showTable\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n              <ngb-tabset>\r\n                <ngb-tab title=\"Campaign\">\r\n                  <ng-template ngbTabContent>\r\n                    <aw-wizard #wizard navBarLayout=\"large-empty-symbols\">\r\n                        <aw-wizard-step [stepTitle]=\"'Details'\" [navigationSymbol]=\"{ symbol: '&#xf0c9;', fontFamily: 'FontAwesome' }\">\r\n                            <!-- <form #newsletterForm=\"ngForm\" class=\"editForm\" novalidate>\r\n                              <br/>\r\n                              <div class=\"row\">\r\n                                  <div class=\"col-lg-6\">\r\n                                      <fieldset class=\"form-group\">\r\n                                          <label>Name Of Newsletter</label>\r\n                                          <input class=\"form-control\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"newsLetter.name\" placeholder=\"Enter Newsletter Name\" type=\"text\" [ngClass]=\"{ 'is-invalid': newsletterForm.submitted && name.invalid }\" required>\r\n                                          <small class=\"form-text text-muted danger\" *ngIf=\"newsletterForm.submitted && name.invalid\">This field is required!</small>\r\n                                      </fieldset>\r\n                                  </div>\r\n\r\n                                  <div class=\"col-lg-6\">\r\n                                      <fieldset class=\"form-group\">\r\n                                          <label>Subject</label>\r\n                                          <input class=\"form-control\" name=\"subject\" #subject=\"ngModel\" [ngClass]=\"{ 'is-invalid': newsletterForm.submitted && subject.invalid }\" [(ngModel)]=\"newsLetter.subject\" placeholder=\"Enter Subject\" type=\"text\" required>\r\n                                          <small class=\"form-text text-muted danger\" *ngIf=\"newsletterForm.submitted && subject.invalid\">This field is required!</small>\r\n                                      </fieldset>\r\n                                  </div>\r\n\r\n                                  <div class=\"col-lg-6\">\r\n                                      <fieldset class=\"form-group\">\r\n                                          <label>Select List</label>\r\n                                          <select class=\"form-control\" name=\"listid\" #listid=\"ngModel\" [ngClass]=\"{ 'is-invalid': newsletterForm.submitted && listid.invalid }\" [(ngModel)]=\"newsLetter.listid\" (change)=\"checkvalue($event.target.value)\" [value]=\"selectList\">\r\n                                              <option value=\"Select List\">Select List</option>\r\n                                              <option *ngFor=\"let list of listDetails\" value=\"{{list.id}}\">{{list.name}}</option>\r\n                                          </select>\r\n                                      </fieldset>\r\n                                  </div>\r\n\r\n                                  <div class=\"col-lg-6\">\r\n                                      <fieldset class=\"form-group\">\r\n                                          <label>To</label>\r\n                                          <input class=\"form-control\" name=\"to\" #to=\"ngModel\" [ngClass]=\"{ 'is-invalid': newsletterForm.submitted && to.invalid }\" [(ngModel)]=\"newsLetter.to\" placeholder=\"Enter Recipent Email(comma separated for multiple receivers)\" (blur)=\"validateEmail($event.target.value, 'to')\" type=\"text\" [attr.disabled]=\"condition ? '' : null\" [required]=\"condition\">\r\n                                          <small class=\"form-text text-muted danger\" *ngIf=\"!condition && (to.invalid && newsletterForm.submitted)\">This field is required!</small>\r\n                                          <small class=\"form-text text-muted danger\" *ngIf=\"notValidTo\">Enter Valid Email/Emails!</small>\r\n                                      </fieldset>\r\n                                  </div>\r\n\r\n                                  <div class=\"col-lg-6\">\r\n                                      <fieldset class=\"form-group\">\r\n                                          <label>Cc</label>\r\n                                          <input class=\"form-control\" name=\"cc\" #cc=\"ngModel\" [ngClass]=\"{ 'is-invalid': newsletterForm.submitted && cc.invalid }\" [(ngModel)]=\"newsLetter.cc\" placeholder=\"Enter Cc Email(comma separated for multiple receivers)\"  (blur)=\"validateEmail($event.target.value, 'cc')\" type=\"text\">\r\n                                          <small class=\"form-text text-muted danger\" *ngIf=\"notValidcc\">Enter Valid Email/Emails!</small>\r\n                                      </fieldset>\r\n                                  </div>\r\n\r\n                                  <div class=\"col-lg-6\">\r\n                                      <fieldset class=\"form-group\">\r\n                                          <label>Bcc</label>\r\n                                          <input class=\"form-control\" name=\"bcc\" #bcc=\"ngModel\" [ngClass]=\"{ 'is-invalid': newsletterForm.submitted && bcc.invalid }\" [(ngModel)]=\"newsLetter.bcc\" placeholder=\"Enter Bcc Email(comma separated for multiple receivers)\"  (blur)=\"validateEmail($event.target.value, 'bcc')\" type=\"text\">\r\n                                          <small class=\"form-text text-muted danger\" *ngIf=\"notValidbcc\">Enter Valid Email/Emails!</small>\r\n                                      </fieldset>\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"col-lg-12\">\r\n                                    <fieldset class=\"form-group\">\r\n                                        <label>Choose Template</label>\r\n                                        <select class=\"form-control\" [(ngModel)]=\"newsLetter.template\" name=\"template\" #template=\"ngModel\" [ngClass]=\"{ 'is-invalid': newsletterForm.submitted && template.invalid }\" (change)=\"displayTemplate($event.target.value)\">\r\n                                          <option value=\"\">Choose Template</option>\r\n                                          <option *ngFor=\"let template of emailTemplates\" value=\"{{template.id}}\">{{template.name}}</option>\r\n                                        </select>\r\n                                    </fieldset>\r\n                                </div>\r\n                                  <div class=\"col-lg-12\">\r\n                                      <label>Email Content *</label>\r\n                                      <fieldset class=\"form-group\">\r\n                                        <div [froalaEditor]=\"options\" #my_editor name=\"body\" #body=\"ngModel\" [ngClass]=\"{ 'is-invalid': newsletterForm.submitted && body.invalid }\" [(ngModel)]=\"newsLetter.body\"></div>\r\n                                      </fieldset>\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"form-group text-center\">\r\n                                {{!newsletterForm.valid}} , {{(notValidTo || notValidBcc || notValidCc)}}\r\n                                  <button type=\"submit\" class=\"btn btn-danger btn-raised mr-1\" (click)=\"cancel()\">Cancel</button>\r\n                                   <button type=\"button\" uiSref=\"preview\" class=\"btn btn-info btn-raised\" [disabled]=\"!newsletterForm.valid\" awNextStep (click)=\"responsive('desktop');\">\r\n                                      Next\r\n                                      <span style=\"margin-left:10px;\">\r\n                                          <i class=\"ft-chevron-right\"></i>\r\n                                      </span>\r\n                                  </button>\r\n                              </div>\r\n                            </form> -->\r\n                            <form [formGroup]=\"newsletterForm\" class=\"editForm\" novalidate>\r\n                              <br/>\r\n                              <div class=\"row\">\r\n                                  <div class=\"col-lg-6\">\r\n                                      <fieldset class=\"form-group\">\r\n                                          <label>Name Of Newsletter</label>\r\n                                          <input class=\"form-control\" formControlName=\"name\" [(ngModel)]=\"newsLetter.name\" placeholder=\"Enter Newsletter Name\" type=\"text\"  required>\r\n                                          <small class=\"form-text text-muted danger\" *ngIf=\"!newsletterForm.get('name').valid && (newsletterForm.get('name').dirty || newsletterForm.get('name').touched)\">This field is required!</small>\r\n                                      </fieldset>\r\n                                  </div>\r\n\r\n                                  <div class=\"col-lg-6\">\r\n                                      <fieldset class=\"form-group\">\r\n                                          <label>Subject</label>\r\n                                          <input class=\"form-control\" formControlName=\"subject\"  [(ngModel)]=\"newsLetter.subject\" placeholder=\"Enter Subject\" type=\"text\" required>\r\n                                          <small class=\"form-text text-muted danger\" *ngIf=\"!newsletterForm.get('subject').valid && (newsletterForm.get('subject').dirty || newsletterForm.get('subject').touched)\">This field is required!</small>\r\n                                      </fieldset>\r\n                                  </div>\r\n\r\n                                  <div class=\"col-lg-12\">\r\n                                      <fieldset class=\"form-group\">\r\n                                          <label>Choose Segment</label>\r\n                                          <ui-switch formControlName=\"segment\" [(ngModel)]=\"newsLetter.segment\"></ui-switch>\r\n                                      </fieldset>\r\n                                  </div>\r\n\r\n                                  <div class=\"col-lg-6\">\r\n                                      <fieldset class=\"form-group\" *ngIf=\"!newsLetter.segment\">\r\n                                          <label>Select List</label>\r\n                                          <select class=\"form-control\" formControlName=\"listid\" [(ngModel)]=\"newsLetter.listid\" (change)=\"checkvalue($event.target.value)\" [value]=\"selectList\">\r\n                                              <option value=\"Select List\">Select List</option>\r\n                                              <option *ngFor=\"let list of listDetails\" value=\"{{list.id}}\">{{list.name}}</option>\r\n                                          </select>\r\n                                      </fieldset>\r\n                                      <fieldset class=\"form-group\" *ngIf=\"newsLetter.segment\">\r\n                                          <label>Select Segment</label>\r\n                                          <select class=\"form-control\" formControlName=\"segmentVal\" [(ngModel)]=\"newsLetter.segmentVal\" (change)=\"checkMemberExsits($event.target.value)\">\r\n                                              <option value=\"Select Segment\">Select Segment</option>\r\n                                              <option *ngFor=\"let segment of segmentDetails\" value=\"{{segment.id}}\">{{segment.name}}</option>\r\n                                          </select>\r\n                                      </fieldset>\r\n                                  </div>\r\n\r\n                                  <div class=\"col-lg-6\">\r\n                                      <fieldset class=\"form-group\" *ngIf=\"!newsLetter.segment\">\r\n                                          <label>To</label>\r\n                                          <input class=\"form-control\" formControlName=\"to\"  [(ngModel)]=\"newsLetter.to\" placeholder=\"Enter Recipent Email(comma separated for multiple receivers, without space)\" type=\"text\" [attr.disabled]=\"condition ? '' : null\" [required]=\"condition ? false : true\">\r\n                                          <small class=\"form-text text-muted danger\" *ngIf=\"!condition && (!newsletterForm.get('to').valid && (newsletterForm.get('to').dirty || newsletterForm.get('to').touched))\">Enter Valid Email</small>\r\n                                      </fieldset>\r\n                                  </div>\r\n\r\n                                  <div class=\"col-lg-6\">\r\n                                      <fieldset class=\"form-group\">\r\n                                          <label>Cc</label>\r\n                                          <input class=\"form-control\" formControlName=\"cc\"  [(ngModel)]=\"newsLetter.cc\" placeholder=\"Enter Cc Email(comma separated for multiple receivers, without space)\"  type=\"text\">\r\n                                          <small class=\"form-text text-muted danger\" *ngIf=\"(!newsletterForm.get('cc').valid && (newsletterForm.get('cc').dirty || newsletterForm.get('cc').touched))\">Enter Valid Email</small>\r\n                                      </fieldset>\r\n                                  </div>\r\n\r\n                                  <div class=\"col-lg-6\">\r\n                                      <fieldset class=\"form-group\">\r\n                                          <label>Bcc</label>\r\n                                          <input class=\"form-control\" formControlName=\"bcc\"  [(ngModel)]=\"newsLetter.bcc\" placeholder=\"Enter Bcc Email(comma separated for multiple receivers, without space)\"  type=\"text\">\r\n                                          <small class=\"form-text text-muted danger\" *ngIf=\"(!newsletterForm.get('bcc').valid && (newsletterForm.get('bcc').dirty || newsletterForm.get('bcc').touched))\">Enter Valid Email</small>\r\n                                      </fieldset>\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"col-lg-12\">\r\n                                    <fieldset class=\"form-group\">\r\n                                        <label>Choose Template</label>\r\n                                        <select class=\"form-control\" [(ngModel)]=\"newsLetter.template\" formControlName=\"template\"  (change)=\"displayTemplate($event.target.value)\">\r\n                                          <option value=\"\">Choose Template</option>\r\n                                          <option *ngFor=\"let template of emailTemplates\" value=\"{{template.id}}\">{{template.name}}</option>\r\n                                        </select>\r\n                                    </fieldset>\r\n                                </div>\r\n                                <div class=\"col-lg-12\">\r\n                                    <label>Email Content *</label>\r\n                                    <fieldset class=\"form-group\">\r\n                                      <div [froalaEditor]=\"options\" #my_editor formControlName=\"body\"  [(ngModel)]=\"newsLetter.body\"></div>\r\n                                    </fieldset>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"form-group text-center\">\r\n                                  <button type=\"submit\" class=\"btn btn-danger btn-raised mr-1\" (click)=\"cancel()\">Cancel</button>\r\n                                   <button type=\"button\" uiSref=\"newsletter1\" class=\"btn btn-info btn-raised\" [disabled]=\"!newsletterForm.valid\" awNextStep (click)=\"responsive('desktop');\">\r\n                                      Next\r\n                                      <span style=\"margin-left:10px;\">\r\n                                          <i class=\"ft-chevron-right\"></i>\r\n                                      </span>\r\n                                  </button>\r\n                              </div>\r\n                            </form>\r\n                        </aw-wizard-step>\r\n                        <!--<aw-wizard-step  [stepTitle]=\"'Preview Campaign'\" [navigationSymbol]=\"{ symbol: '&#xf06e;', fontFamily: 'FontAwesome' }\">\r\n                            <form #previewForm=\"ngForm\" class=\"editForm\">\r\n                              <br/>\r\n                              <div class=\"row align-self-center\">\r\n                                  <div class=\"col-4 align-self-center\">\r\n                                    <i class=\"fas fa-desktop font-large-2 align-self-center\" (click)=\"responsive('desktop');\"></i>\r\n                                  </div>\r\n                                  <div class=\"col-4 align-self-center\">\r\n                                    <i class=\"fas fa-tablet-alt font-large-2 align-self-center\" (click)=\"responsive('tablet');\"></i>\r\n                                  </div>\r\n                                  <div class=\"col-4 align-self-center\">\r\n                                    <i class=\"fas fa-mobile-alt font-large-2 align-self-center\" (click)=\"responsive('mobile');\"></i>\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div id=\"templateResponsive\">\r\n\r\n                                </div>\r\n                              </div>\r\n                              <br/>\r\n                              <div class=\"form-group text-center space-20\">\r\n                                  <button type=\"submit\" class=\"btn btn-danger btn-raised mr-1\" (click)=\"cancel()\">Cancel</button>\r\n                                  <button uiSref=\"newsletter\" type=\"button\" class=\"btn btn-raised btn-secondary mr-1\" awPreviousStep>\r\n                                      <span style=\"margin-right:10px;\">\r\n                                          <i class=\"ft-chevron-left\"></i>\r\n                                      </span> Previous</button>\r\n                                  <button uiSref=\"newsletter1\" type=\"button\" class=\"btn btn-raised btn-info\" awNextStep>\r\n                                      Next\r\n                                      <span style=\"margin-left:10px;\">\r\n                                          <i class=\"ft-chevron-right\"></i>\r\n                                      </span>\r\n                                  </button>\r\n                              </div>\r\n                            </form>\r\n                        </aw-wizard-step>-->\r\n                        <aw-wizard-step [stepTitle]=\"'Schedule / Send Campaign'\" [navigationSymbol]=\"{ symbol: '&#xf1d8;', fontFamily: 'FontAwesome' }\">\r\n                            <form #newsletterForm1=\"ngForm\" class=\"editForm\">\r\n                              <br/>\r\n                              <div class=\"col-lg-12\">\r\n                                <div class=\"card\">\r\n                                  <div class=\"card-header\" style=\"padding: 0 1.5rem 0 !important;\">\r\n                                    <fieldset class=\"form-group\">\r\n                                      <label>When Would You Like To Send This Campaign?</label>\r\n                                      <div class=\"form-group\">\r\n                                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                                          <input type=\"radio\" id=\"customRadioInline1\" name=\"send\" #send [(ngModel)]=\"sendCampaign.send\" value=\"send\" class=\"custom-control-input\" checked>\r\n                                          <label class=\"custom-control-label\" for=\"customRadioInline1\">Send Now</label>\r\n                                        </div>\r\n                                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                                          <input type=\"radio\" id=\"customRadioInline2\" name=\"send\" #send [(ngModel)]=\"sendCampaign.send\" value=\"schedule\" class=\"custom-control-input\">\r\n                                          <label class=\"custom-control-label\" for=\"customRadioInline2\">Schedule Date/Time</label>\r\n                                        </div>\r\n                                      </div>\r\n                                    </fieldset>\r\n                                  </div>\r\n                                  <div class=\"card-body\" style=\"border-radius: 25px !important;background-color: #e9ecef !important;\">\r\n                                    <div class=\"card-block\">\r\n                                      <div class=\"col-lg-12\" *ngIf=\"sendCampaign.send == 'schedule'\">\r\n                                        <fieldset class=\"form-group\">\r\n                                          <label>This Campaign will be sent at the Date and Time specified below :- </label>\r\n                                          <div class=\"col-lg-3\">\r\n                                            <label>Date</label>\r\n                                          </div>\r\n                                          <div class=\"col-lg-9\">\r\n                                            <div class=\"input-group\">\r\n                                              <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" [(ngModel)]=\"sendCampaign.scheduledate\" name=\"scheduledate\" #scheduledate=\"ngModel\" ngbDatepicker [dayTemplate]=\"customDay\"\r\n                                                [markDisabled]=\"isDisabled\" #d3=\"ngbDatepicker\" [minDate]=\"minDate\" required (ngModelChange)=\"disableTimeByDate($event)\">\r\n                                              <div class=\"input-group-append\">\r\n                                                <div class=\"input-group-text\" (click)=\"d3.toggle()\">\r\n                                                  <i class=\"fa fa-calendar\" style=\"cursor: pointer;\"></i>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"col-lg-3\">\r\n                                            <label>Time</label>\r\n                                          </div>\r\n                                          <div class=\"col-lg-9\">\r\n                                            <ngb-timepicker [(ngModel)]=\"sendCampaign.time\" required (ngModelChange)=\"disabletime($event)\" name=\"time\" #time=\"ngModel\"></ngb-timepicker>\r\n                                          </div>\r\n                                        </fieldset>\r\n                                        <fieldset class=\"form-group\">\r\n                                          <label>Confirmation email</label>\r\n                                          <label>Send confirmation to the following email address when the campaign has been sent.</label>\r\n                                          <input type=\"text\" class=\"form-control\" email required name=\"confirm_email\" #confirm_email=\"ngModel\" [(ngModel)]=\"sendCampaign.confirm_email\">\r\n                                        </fieldset>\r\n                                      </div>\r\n                                      <div class=\"form-group text-center\">\r\n                                          <button type=\"submit\" class=\"btn btn-danger btn-raised mr-1\" (click)=\"cancel()\">Cancel</button>\r\n                                          <button uiSref=\"work\" type=\"button\" class=\"btn btn-raised btn-secondary mr-1\" awPreviousStep>\r\n                                              <span style=\"margin-right:10px;\">\r\n                                                  <i class=\"ft-chevron-left\"></i>\r\n                                              </span> Previous</button>\r\n                                          <button uiSref=\"result\" type=\"submit\" class=\"btn btn-success btn-raised\" (click)=\"saveNewsletter('schedule')\" *ngIf=\"!edit && sendCampaign.send == 'schedule'\" [disabled]=\"!newsletterForm1.valid || submitted\">\r\n                                              Schedule this Campaign <i class=\"fas fa-spinner font-medium-4 fa fa-spin white align-middle\" *ngIf=\"submitted\"></i></button>\r\n                                          <button uiSref=\"result\" type=\"submit\" class=\"btn btn-success btn-raised\" (click)=\"saveNewsletter('send')\" *ngIf=\"!edit && sendCampaign.send == 'send'\" [disabled]=\"sendCampaign.send != 'send' || submitted\">\r\n                                              Send Now <i class=\"fas fa-spinner font-medium-4 fa fa-spin white align-middle\" *ngIf=\"submitted\"></i></button>\r\n                                          <button uiSref=\"result\" type=\"submit\" class=\"btn btn-success btn-raised\" (click)=\"updateNewsletter('schedule')\" *ngIf=\"edit && sendCampaign.send == 'schedule'\" [disabled]=\"!newsletterForm1.valid || submitted\">\r\n                                              Update Newsletter <i class=\"fas fa-spinner font-medium-4 fa fa-spin white align-middle\" *ngIf=\"submitted\"></i></button>\r\n                                          <button uiSref=\"result\" type=\"submit\" class=\"btn btn-success btn-raised\" (click)=\"updateNewsletter('send')\" *ngIf=\"edit && sendCampaign.send == 'send'\" [disabled]=\"sendCampaign.send != 'send' || submitted\">\r\n                                              Update Newsletter <i class=\"fas fa-spinner font-medium-4 fa fa-spin white align-middle\" *ngIf=\"submitted\"></i></button>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </form>\r\n                        </aw-wizard-step>\r\n                    </aw-wizard>\r\n                  </ng-template>\r\n                </ngb-tab>\r\n                <!-- <ngb-tab title=\"A/B Test\">\r\n                  <ng-template ngbTabContent>\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                          <div class=\"card-body\">\r\n                            <div class=\"card-block\">\r\n                              <app-multiple-campaign></app-multiple-campaign>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n                </ngb-tab> -->\r\n              </ngb-tabset>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/campaign/newsletter/newsletter.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/campaign/newsletter/newsletter.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected-column {\n  width: 38%;\n  margin-right: 20px;\n  float: right;\n  text-align: left;\n  background: #FFF;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24); }\n\nli {\n  list-style: none; }\n\nul.tablealgn {\n  float: right;\n  text-align: -webkit-auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtcGFpZ24vbmV3c2xldHRlci9DOlxcVXNlcnNcXE1SVDIwXFxEZXNrdG9wXFxVTVxcdXNlcm1hbmFnZW1lbnQvc3JjXFxhcHBcXGNhbXBhaWduXFxuZXdzbGV0dGVyXFxuZXdzbGV0dGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQiw2RUFBNEUsRUFDM0U7O0FBQ0Q7RUFDQSxpQkFBZ0IsRUFDZjs7QUFDRDtFQUNBLGFBQVk7RUFDWix5QkFBd0IsRUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jYW1wYWlnbi9uZXdzbGV0dGVyL25ld3NsZXR0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0ZWQtY29sdW1ue1xyXG53aWR0aDogMzglO1xyXG5tYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbmZsb2F0OiByaWdodDtcclxudGV4dC1hbGlnbjogbGVmdDtcclxuYmFja2dyb3VuZDogI0ZGRjtcclxuYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxufVxyXG5saXtcclxubGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG51bC50YWJsZWFsZ24ge1xyXG5mbG9hdDogcmlnaHQ7XHJcbnRleHQtYWxpZ246IC13ZWJraXQtYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/campaign/newsletter/newsletter.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/campaign/newsletter/newsletter.component.ts ***!
  \*************************************************************/
/*! exports provided: NewsletterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterComponent", function() { return NewsletterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_data_newsletter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data/newsletter.service */ "./src/app/shared/data/newsletter.service.ts");
/* harmony import */ var _shared_data_lists_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/data/lists.service */ "./src/app/shared/data/lists.service.ts");
/* harmony import */ var _shared_data_email_template_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/data/email-template.service */ "./src/app/shared/data/email-template.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NewsletterComponent = /** @class */ (function () {
    function NewsletterComponent(modalService, snotifyService, newsletterservice, listsservice, emailtemplateservice) {
        var _this = this;
        this.modalService = modalService;
        this.snotifyService = snotifyService;
        this.newsletterservice = newsletterservice;
        this.listsservice = listsservice;
        this.emailtemplateservice = emailtemplateservice;
        this.preview = false;
        this.columns = [
            { name: 'Name' },
            { name: 'Subject' },
            { name: 'Status' },
            { name: 'Date' }
        ];
        this.allColumns = [
            { name: 'Name' },
            { name: 'Subject' },
            { name: 'Status' },
            { name: 'Date' }
        ];
        this.newDisplay = [];
        this.adtestingcolumns = [
            { name: 'Name' },
            { name: 'Subject A' },
            { name: 'Subject B' },
            { name: 'From A' },
            { name: 'From B' },
            { name: 'Campaign Winner Type' },
            { name: 'Campaign A/B Testing On' },
            { name: 'Testing Time' },
            { name: 'Status' }
        ];
        this.adtestingallcolumns = [
            { name: 'Name' },
            { name: 'Subject A' },
            { name: 'Subject B' },
            { name: 'From A' },
            { name: 'From B' },
            { name: 'Campaign Winner Type' },
            { name: 'Campaign A/B Testing On' },
            { name: 'Testing Time' },
            { name: 'Status' }
        ];
        // newsletter1Form: FormGroup;
        this.newsletterDetails = [];
        this.condition = true;
        this.showTable = true;
        this.newsLetter = {
            'name': '',
            'subject': '',
            'listid': 'Select List',
            'to': '',
            'cc': '',
            'bcc': '',
            'body': '',
            'template': '',
            'id': '',
            'body1': '',
            'segment': false,
            'segmentVal': ''
        };
        this.sendCampaign = {
            'id': 0,
            'scheduledate': '',
            'send': 'send',
            'time': '',
            'confirm_email': ''
        };
        this.p = 1;
        this.pageSize = 5;
        this.options = {
            charCounterCount: true,
            // Set the image upload parameter.
            imageUploadParam: 'image_param',
            // Set the image upload URL.
            imageUploadURL: 'https://cockburncrc.com.au/members/usermanagement/images',
            // Additional upload params.
            imageUploadParams: { id: 'my_editor' },
            // Set request type.
            imageUploadMethod: 'POST',
            // Set max image size to 5MB.
            imageMaxSize: 5 * 1024 * 1024,
            // Allow to upload PNG and JPG.
            imageAllowedTypes: ['jpeg', 'jpg', 'png'],
            events: {
                'froalaEditor.initialized': function () {
                    console.log('initialized');
                },
                'froalaEditor.image.beforeUpload': function (e, editor, images) {
                    //Your code
                    if (images.length) {
                        // Create a File Reader.
                        var reader = new FileReader();
                        // Set the reader to insert images when they are loaded.
                        reader.onload = function (ev) {
                            var result = ev.target['result'];
                            editor.image.insert(result, null, null, editor.image.get());
                            console.log(ev, editor.image, ev.target['result']);
                        };
                        // Read image as base64.
                        reader.readAsDataURL(images[0]);
                    }
                    // Stop default upload chain.
                    return false;
                }
            }
        };
        this.timeout = 3000;
        this.position = ng_snotify__WEBPACK_IMPORTED_MODULE_5__["SnotifyPosition"].centerCenter;
        this.progressBar = true;
        this.closeClick = true;
        this.newTop = true;
        this.backdrop = -1;
        this.dockMax = 8;
        this.blockMax = 6;
        this.pauseHover = true;
        this.titleMaxLength = 15;
        this.bodyMaxLength = 80;
        this.selectList = '';
        this.edit = false;
        this.newsLetterId = 0;
        this.SelectedTab = '';
        this.Sendcampaign = false;
        this.savedNewsletterId = 0;
        this.segmentDetails = [];
        this.isCollapsed = false;
        this.submitted = false;
        this.copySubimitted = false;
        this.commaSepEmail = function (control) {
            if (control.value != '' && control.value != null) {
                var emails = control.value.split(',');
                var forbidden = emails.some(function (email) { return _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](email)); });
                console.log(forbidden);
                return forbidden ? { 'to': { value: control.value } } : null;
            }
        };
        var current = new Date();
        console.log(current);
        this.minDate = {
            year: current.getFullYear(),
            month: current.getMonth() + 1,
            day: current.getDate()
        };
        this.newsLetter.body = this.emailtemplateservice.getDefaultTemplate();
        this.defaultTemplate = this.emailtemplateservice.getDefaultTemplate();
        this.SelectedTab = 'normal';
        this.newsletterservice.getNewletter().then(function (data) {
            if (data['status']) {
                console.log(data['newsletter']);
                _this.newsletterDetails = data['newsletter'];
                _this.collectionSize = data['newsletter'].length;
            }
        });
        this.listsservice.getNewsletterList().then(function (data) {
            if (data['status'] == 'success') {
                _this.listDetails = data['lists'];
                _this.selectList = data['lists'][0]['id'];
                _this.newsLetter.listid = data['lists'][0]['id'];
                if (_this.newsLetter.listid == 'Select List') {
                    _this.condition = false;
                }
                else {
                    _this.condition = true;
                }
            }
            else {
                _this.condition = false;
                _this.newsLetter.listid = 'Select List';
            }
        }, function (error) {
        });
        this.newsletterservice.getMembersSegment().then(function (data) {
            if (data['status'] == 'success') {
                _this.segmentDetails = data['newsletter'];
            }
            else {
                _this.segmentDetails = [];
            }
        });
        this.emailtemplateservice.getNewsTemp(new Date().getTime()).then(function (data) {
            if (data['status'] == 'success') {
                _this.emailTemplates = data['emailTemplate'];
                //console.log(this.emailTemplates);
            }
        }, function (error) {
        });
    }
    NewsletterComponent.prototype.disabletime = function (control) {
        console.log(control);
        var current = new Date();
        if (this.sendCampaign.scheduledate != '') {
            var dates = this.sendCampaign.scheduledate['day'] + '/' + this.sendCampaign.scheduledate['month'] + '/' + this.sendCampaign.scheduledate['year'];
            var currentdateformat = current.getDate() + '/' + (current.getMonth() + 1) + '/' + current.getFullYear();
            if (currentdateformat == dates) {
                console.log(currentdateformat);
                if (control.hour < current.getHours()) {
                    this.sendCampaign.time = '';
                    if (control.minute <= current.getMinutes()) {
                        this.sendCampaign.time = '';
                    }
                }
            }
        }
    };
    NewsletterComponent.prototype.disableTimeByDate = function (control) {
        var current = new Date();
        var dates = control.day + '/' + control.month + '/' + control.year;
        var currentdateformat = current.getDate() + '/' + (current.getMonth() + 1) + '/' + current.getFullYear();
        if (this.sendCampaign.time != '') {
            if (currentdateformat == dates) {
                if (this.sendCampaign.time['hour'] < current.getHours()) {
                    this.sendCampaign.time = '';
                    if (this.sendCampaign.time['minute'] <= current.getMinutes()) {
                        this.sendCampaign.time = '';
                    }
                }
            }
        }
    };
    NewsletterComponent.prototype.toggle = function (col) {
        var _this = this;
        var isChecked = this.isChecked(col);
        if (isChecked) {
            this.columns = this.columns.filter(function (c) {
                return c.name !== col.name;
            });
        }
        else {
            var newColumns_1 = this.columns.concat([col]);
            this.columns = [];
            this.allColumns.forEach(function (f) {
                newColumns_1.forEach(function (s) {
                    if (s.name === f.name) {
                        _this.columns.push(f);
                    }
                });
            });
        }
    };
    NewsletterComponent.prototype.isChecked = function (col) {
        return this.columns.find(function (c) {
            return c.name === col.name;
        });
    };
    NewsletterComponent.prototype.toggleabtesting = function (col) {
        var _this = this;
        var isCheckedabtesting = this.isCheckedabtesting(col);
        if (isCheckedabtesting) {
            this.adtestingcolumns = this.adtestingcolumns.filter(function (c) {
                return c.name !== col.name;
            });
        }
        else {
            var newColumns_2 = this.adtestingcolumns.concat([col]);
            this.adtestingcolumns = [];
            this.adtestingallcolumns.forEach(function (f) {
                newColumns_2.forEach(function (s) {
                    if (s.name === f.name) {
                        _this.adtestingcolumns.push(f);
                    }
                });
            });
        }
    };
    NewsletterComponent.prototype.isCheckedabtesting = function (col) {
        return this.adtestingcolumns.find(function (c) {
            return c.name === col.name;
        });
    };
    NewsletterComponent.prototype.getName = function (name) {
        if (!name)
            return '';
        if (name.length <= 20) {
            return name;
        }
        return name.substr(0, 20) + '...';
    };
    NewsletterComponent.prototype.ngOnInit = function () {
        this.newsletterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'subject': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'listid': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, null),
            'to': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [this.commaSepEmail]),
            'cc': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [this.commaSepEmail]),
            'bcc': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [this.commaSepEmail]),
            'template': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, null),
            'body': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, null),
            'segment': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, null),
            'segmentVal': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, null)
        });
    };
    NewsletterComponent.prototype.saveNewsletter = function (type) {
        var _this = this;
        this.submitted = true;
        this.savedNewsletterId = 0;
        this.newsletterservice.saveNewletter(this.newsLetter).then(function (data) {
            if (data['status']) {
                _this.savedNewsletterId = data['id'];
                if (type == 'schedule') {
                    _this.ScheduleNewsletter();
                }
                else {
                    _this.sendnewsletter(_this.savedNewsletterId);
                }
            }
        });
    };
    NewsletterComponent.prototype.ScheduleNewsletter = function () {
        var _this = this;
        if (this.savedNewsletterId > 0) {
            this.sendCampaign.id = this.savedNewsletterId;
        }
        else {
            this.sendCampaign.id = this.newsLetterId;
        }
        this.newsletterservice.ScheduleNewsletter(this.sendCampaign).then(function (data) {
            if (data['status']) {
                _this.newsLetter.name = '';
                _this.newsLetter.subject = '';
                _this.newsLetter.listid = '';
                _this.newsLetter.to = '';
                _this.newsLetter.cc = '';
                _this.newsLetter.bcc = '';
                _this.newsLetter.template = '';
                _this.newsLetter.segment = false;
                _this.newsLetter.segmentVal = '';
                _this.newsLetter.body = _this.defaultTemplate;
                _this.scheduleForm.reset();
                _this.savedNewsletterId = 0;
                if (!_this.edit) {
                    _this.snotifyService.success('Campaign Saved & Scheduled Successfully', '', _this.getConfig());
                }
                else {
                    _this.snotifyService.success('Campaign Updated & Scheduled Successfully', '', _this.getConfig());
                }
                _this.newsletterservice.getNewletterTimeLine(new Date().getTime()).then(function (data) {
                    if (data['status']) {
                        _this.newsletterDetails = data['newsletter'];
                        _this.collectionSize = data['newsletter'].length;
                        _this.newsLetter.body = _this.defaultTemplate;
                        _this.showTable = true;
                        _this.submitted = false;
                    }
                });
            }
        });
    };
    NewsletterComponent.prototype.sendnewsletter = function (id) {
        var _this = this;
        this.newsletterservice.sendNewletter(id).then(function (data) {
            if (data['status']) {
                _this.savedNewsletterId = 0;
                if (!_this.edit) {
                    _this.snotifyService.success('Campaign Saved & Sent Successfully', '', _this.getConfig());
                }
                else {
                    _this.snotifyService.success('Campaign Updated & Sent Successfully', '', _this.getConfig());
                }
                var self_1 = _this;
                var newid = window.btoa(id + "$reportEdit");
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: '<i class="fab fa-telegram"></i> Queue For immediate delivery',
                    html: '' +
                        '<ul class="list-group">' +
                        '<li class="list-group-item">Campaign Name: ' + _this.newsLetter.name + '</li>' +
                        '<li class="list-group-item">Recepients: ' + data['totalsent'] + '</li>' +
                        '<li class="list-group-item">Not Received: ' + data['notsent'] + '</li>' +
                        '<li class="list-group-item">To Be Delivered: Immediately</li>' +
                        '</ul>',
                    showCloseButton: false,
                    confirmButtonText: '<a href="#/statistics?id=' + newid + '">See Campaign Report</a>',
                    allowOutsideClick: true,
                    allowEscapeKey: true
                }).then(function (dismiss) {
                    // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                    if (dismiss.dismiss.toString() == 'overlay' || dismiss.dismiss.toString() == 'esc' || dismiss.dismiss.toString() == 'cancel' || dismiss.dismiss.toString() == 'close' || dismiss.dismiss.toString() == 'timer') {
                        self_1.newsletterservice.getNewletterTimeLine(new Date().getTime()).then(function (data) {
                            if (data['status']) {
                                self_1.newsLetter.name = '';
                                self_1.newsLetter.subject = '';
                                self_1.newsLetter.listid = '';
                                self_1.newsLetter.to = '';
                                self_1.newsLetter.cc = '';
                                self_1.newsLetter.bcc = '';
                                self_1.newsLetter.template = '';
                                self_1.newsLetter.body = self_1.defaultTemplate;
                                self_1.newsLetter.segment = false;
                                self_1.newsLetter.segmentVal = '';
                                self_1.showTable = true;
                                self_1.newsletterDetails = data['newsletter'];
                                self_1.collectionSize = data['newsletter'].length;
                                self_1.newsLetter.body = self_1.defaultTemplate;
                                self_1.submitted = false;
                            }
                        });
                    }
                });
            }
        });
    };
    NewsletterComponent.prototype.checkvalue = function (val) {
        if (val != "Select List") {
            this.newsLetter.to = '';
            this.condition = true;
        }
        else {
            this.condition = false;
        }
    };
    NewsletterComponent.prototype.checkMemberExsits = function (val) {
        var _this = this;
        if (val != "Select Segment") {
            // this.selectList = 'Select List';
            this.newsLetter.to = '';
            this.condition = false;
            var condition = this.segmentDetails.filter(function (h) { return h.id == val; });
            this.newsletterservice.getUserMembersSegment(condition).then(function (data) {
                if (data['status'] == 'success') {
                    if (data['newsletter'] == 0) {
                        _this.snotifyService.error('No Users in selected Segment to send Newsletter', '', _this.getConfig());
                        _this.newsLetter.segmentVal = '';
                    }
                }
                else {
                    _this.snotifyService.error('No Users in selected Segment to send Newsletter', '', _this.getConfig());
                    _this.newsLetter.segmentVal = '';
                }
            });
        }
    };
    NewsletterComponent.prototype.addnews = function () {
        this.showTable = false;
    };
    NewsletterComponent.prototype.sendtestmail = function () {
        var _this = this;
        this.newsletterservice.sendTestEmail(this.newsLetter).then(function (data) {
            if (data['status']) {
                _this.snotifyService.success('Test Email Sent Successfully', '', _this.getConfig());
            }
        });
    };
    NewsletterComponent.prototype.cancel = function () {
        var _this = this;
        this.showTable = true;
        this.edit = false;
        this.newsLetter.name = '';
        this.newsLetter.subject = '';
        this.newsLetter.to = '';
        this.newsLetter.cc = '';
        this.newsLetter.bcc = '';
        this.newsLetter.template = '';
        this.newsLetter.body = this.defaultTemplate;
        this.sendCampaign.scheduledate = '';
        this.sendCampaign.send = '';
        this.sendCampaign.time = '';
        this.sendCampaign.confirm_email = '';
        this.savedNewsletterId = 0;
        this.newsLetter.segment = false;
        this.newsLetter.segmentVal = '';
        this.newsletterservice.getNewletterTimeLine(new Date().getTime()).then(function (data) {
            if (data['status']) {
                _this.newsletterDetails = data['newsletter'];
                _this.collectionSize = data['newsletter'].length;
                _this.newsLetter.body = _this.defaultTemplate;
            }
        });
    };
    NewsletterComponent.prototype.displayTemplate = function (value) {
        var _this = this;
        for (var i = 0; i < this.emailTemplates.length; i++) {
            if (this.emailTemplates[i]['id'] == value) {
                this.emailtemplateservice.getEmailTempById(value).then(function (data) {
                    //console.log(data['emailTemplate']);
                    if (data['status'] == 'success') {
                        _this.newsLetter.body = data['emailTemplate'][0]['body'];
                        //console.log(this.emailTemplates);
                    }
                }, function (error) {
                });
            }
            else {
                this.newsLetter.body = this.defaultTemplate;
            }
        }
    };
    NewsletterComponent.prototype.EditNewsletter = function (id) {
        var newsletterEditDetails = this.newsletterDetails.filter(function (h) { return h.id == id; });
        this.newsLetter.name = newsletterEditDetails[0]['name'];
        this.newsLetter.subject = newsletterEditDetails[0]['subject'];
        this.newsLetter.listid = newsletterEditDetails[0]['listid'];
        this.newsLetter.segment = newsletterEditDetails[0]['segment'];
        if (newsletterEditDetails[0]['segment']) {
            this.newsLetter.segmentVal = newsletterEditDetails[0]['listid'];
        }
        else {
            if (newsletterEditDetails[0]['listid'] == "0") {
                this.selectList = 'Select List';
                this.condition = false;
            }
            else {
                this.condition = true;
                this.selectList = newsletterEditDetails[0]['listid'];
            }
        }
        this.newsLetter.to = newsletterEditDetails[0]['to'];
        this.newsLetter.cc = newsletterEditDetails[0]['cc'];
        this.newsLetter.bcc = newsletterEditDetails[0]['bcc'];
        if (newsletterEditDetails[0]['template'] == "0") {
            this.newsLetter.template = 'Choose Template';
        }
        else {
            this.newsLetter.template = newsletterEditDetails[0]['template'];
        }
        this.sendCampaign.scheduledate = newsletterEditDetails[0]['scheduledate'];
        this.sendCampaign.send = newsletterEditDetails[0]['send'];
        this.sendCampaign.time = newsletterEditDetails[0]['scheduletime'];
        this.sendCampaign.confirm_email = newsletterEditDetails[0]['confirm_email'];
        //this.newsLetter.template = newsletterEditDetails[0]['template'];
        this.newsLetter.body = newsletterEditDetails[0]['message'];
        this.newsLetterId = id;
        this.showTable = false;
        this.edit = true;
        this.savedNewsletterId = 0;
    };
    NewsletterComponent.prototype.updateNewsletter = function (type) {
        var _this = this;
        this.submitted = true;
        var updateNewsLetter = {
            'name': this.newsLetter.name,
            'subject': this.newsLetter.subject,
            'listid': this.newsLetter.listid,
            'to': this.newsLetter.to,
            'cc': this.newsLetter.cc,
            'bcc': this.newsLetter.bcc,
            'body': this.newsLetter.body,
            'template': this.newsLetter.template,
            'id': this.newsLetterId,
            'send': this.sendCampaign.send,
            'scheduledate': this.sendCampaign.scheduledate,
            'scheduletime': this.sendCampaign.time,
            'confirm_email': this.sendCampaign.confirm_email
        };
        this.newsletterservice.editNewsletter(updateNewsLetter).then(function (data) {
            if (data['status']) {
                if (type == 'schedule') {
                    _this.ScheduleNewsletter();
                }
                else {
                    _this.sendnewsletter(_this.newsLetterId);
                }
                // this.newsletterservice.getNewletterTimeLine(new Date().getTime()).then(data => {
                //   if(data['status']){
                //     this.showTable = true;
                //     this.newsletterDetails = data['newsletter'];
                //     this.collectionSize = data['newsletter'].length;
                //     this.newsLetter.body = this.defaultTemplate;
                //   }
                // });
            }
        });
    };
    NewsletterComponent.prototype.CopyNewsletter = function (id) {
        var _this = this;
        this.newsletterservice.copyNewsletter(id).then(function (data) {
            if (data['status']) {
                _this.snotifyService.success('Newsletter Copied Successfully', '', _this.getConfig());
                _this.newsletterservice.getNewletterTimeLine(new Date().getTime()).then(function (data) {
                    if (data['status']) {
                        _this.showTable = true;
                        _this.newsletterDetails = data['newsletter'];
                        _this.collectionSize = data['newsletter'].length;
                        _this.newsLetter.body = _this.defaultTemplate;
                    }
                });
            }
        });
    };
    NewsletterComponent.prototype.selectData = function (value) {
        var _this = this;
        this.SelectedTab = value.nextId;
        if (value.nextId == 'normal') {
            this.newsletterservice.getNewletter().then(function (data) {
                if (data['status']) {
                    _this.newsletterDetails = [];
                    _this.newsletterDetails = data['newsletter'];
                }
            });
        }
        else {
            this.newsletterservice.getABTestingNewletter(new Date().getTime()).then(function (data) {
                if (data['status']) {
                    _this.newsletterDetails = [];
                    console.log(data['newsletter']);
                    _this.newsletterDetails = data['newsletter'];
                }
            });
        }
    };
    NewsletterComponent.prototype.responsive = function (classname) {
        // this.width = w;
        document.getElementById('templateResponsive').innerHTML = this.newsLetter.body;
        if (document.getElementById('templateResponsive').firstElementChild) {
            var elem = document.getElementById("templateResponsive").firstElementChild;
            elem.className = classname;
        }
    };
    NewsletterComponent.prototype.getConfig = function () {
        this.snotifyService.setDefaults({
            global: {
                newOnTop: this.newTop,
                maxAtPosition: this.blockMax,
                maxOnScreen: this.dockMax,
            }
        });
        return {
            bodyMaxLength: this.bodyMaxLength,
            titleMaxLength: this.titleMaxLength,
            backdrop: this.backdrop,
            position: this.position,
            timeout: this.timeout,
            showProgressBar: this.progressBar,
            closeOnClick: this.closeClick,
            pauseOnHover: this.pauseHover
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('newsletterForm1'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], NewsletterComponent.prototype, "scheduleForm", void 0);
    NewsletterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newsletter',
            template: __webpack_require__(/*! ./newsletter.component.html */ "./src/app/campaign/newsletter/newsletter.component.html"),
            styles: [__webpack_require__(/*! ./newsletter.component.scss */ "./src/app/campaign/newsletter/newsletter.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"], ng_snotify__WEBPACK_IMPORTED_MODULE_5__["SnotifyService"], _shared_data_newsletter_service__WEBPACK_IMPORTED_MODULE_2__["newsLetterService"], _shared_data_lists_service__WEBPACK_IMPORTED_MODULE_3__["ListsService"], _shared_data_email_template_service__WEBPACK_IMPORTED_MODULE_4__["EmailTemplateService"]])
    ], NewsletterComponent);
    return NewsletterComponent;
}());



/***/ }),

/***/ "./src/app/campaign/reports/reports.component.html":
/*!*********************************************************!*\
  !*** ./src/app/campaign/reports/reports.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"basic-elements\">\r\n\t<div class=\"row\">\r\n\t    <div class=\"col-md-6\">\r\n\t        <div class=\"content-header\">Reports</div>\r\n\t    </div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<div class=\"card-title-wrap bar-success\">\r\n\t\t\t\t\t\t<p>{{reportCount}} Reports</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t          <div class=\"card-block\">\r\n\t\t\t\t\t\t\t<ngb-tabset (tabChange)=\"selectData($event)\">\r\n\t\t\t\t\t\t\t\t<ngb-tab title=\"Normal Campaign Reports\" id=\"normal\" active=\"SelectedTab == 'normal'\">\r\n\t\t\t\t\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t          \t<ngx-datatable class=\"material\" class=\"bootstrap\" [rows]=\"reportDetails\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"50\" [sorts]=\"[{prop: 'date', dir: 'desc'}]\" [limit]=\"10\">\r\n\t\t\t\t              <ngx-datatable-column name=\"Status\">\r\n\t\t\t\t                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t                      {{row.status}}\r\n\t\t\t\t                  </ng-template>\r\n\t\t\t\t              </ngx-datatable-column>\r\n\t\t\t\t              <ngx-datatable-column name=\"Newsletter Name\">\r\n\t\t\t\t                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t                      {{getName(row.name)}}\r\n\t\t\t\t                  </ng-template>\r\n\t\t\t\t              </ngx-datatable-column>\r\n\t\t\t\t              <ngx-datatable-column name=\"Newsletter Sent\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{row.sent}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t                </ngx-datatable-column>\r\n\t\t\t                <ngx-datatable-column name=\"Open Rate\">\r\n\t\t\t                    <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t                        {{row.openRate}}\r\n\t\t\t                    </ng-template>\r\n\t\t\t                </ngx-datatable-column>\r\n\t\t\t                <ngx-datatable-column name=\"Bounce Rate\">\r\n\t\t\t                    <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t                        {{row.bounceRate}}\r\n\t\t\t                    </ng-template>\r\n\t\t\t                </ngx-datatable-column>\r\n\t\t\t                <ngx-datatable-column name=\"Click Through rate\">\r\n\t\t\t                    <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t                        {{row.linkRate}}\r\n\t\t\t                    </ng-template>\r\n\t\t\t                </ngx-datatable-column>\r\n\t\t\t                <ngx-datatable-column name=\"Last Sent\">\r\n\t\t\t                    <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t                        {{row.date | date: 'yyyy/MM/dd'}}\r\n\t\t\t                    </ng-template>\r\n\t\t\t                </ngx-datatable-column>\r\n\t\t\t                <ngx-datatable-column name=\"Statistics\">\r\n\t\t\t                    <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t                        <a class=\"success p-0\" (click)=\"redirect(row.id);\"><i class=\"icon-bar-chart\"></i></a>\r\n\t\t\t                    </ng-template>\r\n\t\t\t                </ngx-datatable-column>\r\n\t\t\t            \t</ngx-datatable>\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</ngb-tab>\r\n\t\t\t\t\t\t\t\t<!-- <ngb-tab title=\"A/B Testing Campaign Reports\" id=\"abtesting\" active=\"SelectedTab == 'abtesting'\">\r\n\t\t\t\t\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t          \t<ngx-datatable class=\"material\" class=\"bootstrap\" [rows]=\"reportDetails\" [columns]=\"abtestingcolumns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"50\" [sorts]=\"[{prop: 'date', dir: 'desc'}]\" [limit]=\"10\">\r\n\t\t\t\t              <ngx-datatable-column name=\"Newsletter Name\">\r\n\t\t\t\t                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t                      {{getName(row.name)}}\r\n\t\t\t\t                  </ng-template>\r\n\t\t\t\t              </ngx-datatable-column>\r\n\t\t\t                <ngx-datatable-column name=\"A/B Testing On\">\r\n\t\t\t                    <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t                        {{row.abtestingOn}}\r\n\t\t\t                    </ng-template>\r\n\t\t\t                </ngx-datatable-column>\r\n\t\t\t                <ngx-datatable-column name=\"Type A Rate\">\r\n\t\t\t                    <ng-template let-row=\"row\" ngx-datatable-cell-template >\r\n\t\t\t                        <p *ngIf=\"row.rateTrack == 'open'\">{{row.openARate}}</p>\r\n\t\t\t                        <p *ngIf=\"row.rateTrack == 'click'\">{{row.clickARate}}</p>\r\n\t\t\t                        <p *ngIf=\"row.rateTrack == 'unsubscriber'\">{{row.unsubscribeCountA}}</p>\r\n\t\t\t                    </ng-template>\r\n\t\t\t                </ngx-datatable-column>\r\n\t\t\t                <ngx-datatable-column name=\"Type B Rate\">\r\n\t\t\t                    <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t                        <p *ngIf=\"row.rateTrack == 'open'\">{{row.openBRate}}</p>\r\n\t\t\t                        <p *ngIf=\"row.rateTrack == 'click'\">{{row.clickBRate}}</p>\r\n\t\t\t                        <p *ngIf=\"row.rateTrack == 'unsubscriber'\">{{row.unsubscribeCountB}}</p>\r\n\t\t\t                    </ng-template>\r\n\t\t\t                </ngx-datatable-column>\r\n\t\t\t                <ngx-datatable-column name=\"Total Sent\">\r\n\t\t\t                    <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"row.status == 'pending'\">{{row.usera + row.userb}}</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"row.status == 'Sent'\">{{row.totalSent}}</p>\r\n\t\t\t                    </ng-template>\r\n\t\t\t                </ngx-datatable-column>\r\n\t\t\t                <ngx-datatable-column name=\"Test Time\">\r\n\t\t\t                    <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"row.time == 30\">{{row.time}} min</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"row.time != 30\">{{row.time}} Hrs</p>\r\n\t\t\t                    </ng-template>\r\n\t\t\t                </ngx-datatable-column>\r\n\t\t\t                <ngx-datatable-column name=\"Statistics\">\r\n\t\t\t                    <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t                        <a class=\"success p-0\" (click)=\"abtestingStats(row.id);\"><i class=\"icon-bar-chart\"></i></a>\r\n\t\t\t                    </ng-template>\r\n\t\t\t                </ngx-datatable-column>\r\n\t\t\t            \t</ngx-datatable>\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</ngb-tab> -->\r\n\t\t\t\t\t\t\t</ngb-tabset>\r\n\t                    \t<!-- <ngx-datatable #table class='bootstrap' [rows]=\"rows\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n                            [rowHeight]=\"'auto'\" [limit]=\"10\"></ngx-datatable> -->\r\n\t                        <!-- <table class=\"table table-responsive-sm\">\r\n\t                            <thead>\r\n\t                                <tr>\r\n\t                                    <th>Status</th>\r\n\t                                    <th>Newsletter Name</th>\r\n\t                                    <th>Newsletter Sent</th>\r\n\t                                    <th>Open Rate</th>\r\n\t                                    <th>Bounce Rate</th>\r\n\t                                    <th>Click Through rate</th>\r\n\t                                    <th>Last Sent</th>\r\n\t\t\t\t\t\t\t\t\t\t<th></th>\r\n\t                                </tr>\r\n\t                            </thead>\r\n\t                            <tbody>\r\n\t                                <tr *ngFor=\"let reportData of reportData\">\r\n\t                                    <td>{{reportData.status}}</td>\r\n\t                                    <td>{{reportData.name}}</td>\r\n\t                                    <td>{{reportData.sent}}</td>\r\n                        \t\t\t\t<td>{{reportData.openRate}}</td>\r\n\t                                    <td>{{reportData.bounceRate}}</td>\r\n\t                                    <td>{{reportData.linkRate}}</td>\r\n\t                                    <td>{{reportData.date}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td><a class=\"success p-0\" (click)=\"redirect(reportData.id);\"><i class=\"icon-bar-chart\"></i></a></td>\r\n\t                                </tr>\r\n\t                            </tbody>\r\n\t                        </table> -->\r\n              </div>\r\n        \t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/campaign/reports/reports.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/campaign/reports/reports.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbXBhaWduL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/campaign/reports/reports.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/campaign/reports/reports.component.ts ***!
  \*******************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_statistics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/data/statistics.service */ "./src/app/shared/data/statistics.service.ts");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable/release */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(statisticsservice, router, route) {
        this.statisticsservice = statisticsservice;
        this.router = router;
        this.route = route;
        this.reportCount = 0;
        this.reportDetails = [];
        this.columns = [
            { name: 'Status' },
            { name: 'Newsletter Name' },
            { name: 'Newsletter Sent' },
            { name: 'Open Rate' },
            { name: 'Bounce Rate' },
            { name: 'Click Through Rate' },
            { name: 'Last Sent' },
        ];
        this.abtestingcolumns = [
            { name: 'Name' },
            { name: 'A/B Testing On' },
            { name: 'Type A Open' },
            { name: 'Type B Open' },
            { name: 'Total Sent' },
            { name: 'Test Time' }
        ];
        this.SelectedTab = '';
        this.SelectedTab = 'normal';
    }
    ReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.statisticsservice.getreports().then(function (data) {
            console.log(data['reports']);
            if (data['status'] == 'success') {
                _this.reportCount = data['reports'].length;
                /*for (let i = 0; i < data['reports'].length; i++) {
                    let array = {
                        Status : data['reports'][i]['status'],
                        NewsletterName : data['reports'][i]['name'],
                        NewsletterSent : data['reports'][i]['sent'],
                        OpenRate : data['reports'][i]['openRate'],
                        BounceRate : data['reports'][i]['bounceRate'],
                        ClickThroughrate : data['reports'][i]['linkRate'],
                        LastSent : data['reports'][i]['date']
                    }
                    this.reportDetails.push(array);
                    //this.reportDetails = data['reports'];
                }*/
                _this.reportDetails = data['reports'];
                //this.rows = this.reportDetails;
            }
        }, function (error) {
        });
    };
    ReportsComponent.prototype.getName = function (name) {
        if (!name)
            return '';
        if (name.length <= 20) {
            return name;
        }
        return name.substr(0, 20) + '...';
    };
    ReportsComponent.prototype.redirect = function (id) {
        this.router.navigate(['/statistics'], { queryParams: { id: window.btoa(id + "$reportEdit") } });
    };
    ReportsComponent.prototype.abtestingStats = function (id) {
        var val = ((id * 1080) / 8000);
        this.router.navigate(['/campaign/abtestingStatics'], { queryParams: { id: window.btoa(val.toString()) } });
    };
    ReportsComponent.prototype.selectData = function (value) {
        var _this = this;
        this.SelectedTab = value.nextId;
        if (value.nextId == 'normal') {
            this.statisticsservice.getreports().then(function (data) {
                console.log(data['reports']);
                if (data['status'] == 'success') {
                    _this.reportCount = data['reports'].length;
                    _this.reportDetails = data['reports'];
                }
            }, function (error) {
            });
        }
        else {
            this.statisticsservice.getabtestingReports(new Date().getTime()).then(function (data) {
                console.log(data['reports']);
                if (data['status'] == 'success') {
                    _this.reportCount = data['reports'].length;
                    _this.reportDetails = data['reports'];
                }
            }, function (error) {
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"])
    ], ReportsComponent.prototype, "table", void 0);
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/campaign/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.scss */ "./src/app/campaign/reports/reports.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_data_statistics_service__WEBPACK_IMPORTED_MODULE_1__["StatisticsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=campaign-campaign-module.js.map