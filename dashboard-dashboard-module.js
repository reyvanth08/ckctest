(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/analytics/analytics.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/analytics/analytics.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Statistics cards Starts-->\r\n<div class=\"row\">\r\n    <div class=\"col-xl-4 col-lg-6 col-md-6 col-12\">\r\n        <div class=\"card bg-white\">\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block pt-2 pb-0\">\r\n                    <div class=\"media\">\r\n                        <div class=\"media-body text-left\">\r\n                            <h4 class=\"font-medium-5 card-title mb-0\">$2310</h4>\r\n                            <span>Analysts Payable</span>\r\n                        </div>\r\n                        <div class=\"media-right text-right\">\r\n                            <i class=\"icon-briefcase font-large-1 red\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div id=\"Widget-area-chart4\" class=\"height-150 WidgetAreaChart4 WidgetAreaChart4shadow mb-2\">\r\n                    <x-chartist class=\"\" [data]=\"WidgetAreaChart4.data\" [type]=\"WidgetAreaChart4.type\" [options]=\"WidgetAreaChart4.options\" [responsiveOptions]=\"WidgetAreaChart4.responsiveOptions\"\r\n                        [events]=\"WidgetAreaChart4.events\">\r\n                    </x-chartist>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-6 col-md-6 col-12\">\r\n        <div class=\"card bg-white\">\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block pt-2 pb-0\">\r\n                    <div class=\"media\">\r\n                        <div class=\"media-body text-left\">\r\n                            <h4 class=\"font-medium-5 card-title mb-0\">$2543</h4>\r\n                            <span>Equipment Cost</span>\r\n                        </div>\r\n                        <div class=\"media-right text-right\">\r\n                            <i class=\"icon-anchor font-large-1 purple\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div id=\"Widget-area-chart5\" class=\"height-150 WidgetAreaChart5 WidgetAreaChart5shadow mb-2\">\r\n                    <x-chartist class=\"\" [data]=\"WidgetAreaChart5.data\" [type]=\"WidgetAreaChart5.type\" [options]=\"WidgetAreaChart5.options\" [responsiveOptions]=\"WidgetAreaChart5.responsiveOptions\"\r\n                        [events]=\"WidgetAreaChart5.events\">\r\n                    </x-chartist>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-4 col-lg-6 col-md-6 col-12\">\r\n        <div class=\"card bg-white\">\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block pt-2 pb-0\">\r\n                    <div class=\"media\">\r\n                        <div class=\"media-body text-left\">\r\n                            <h4 class=\"font-medium-5 card-title mb-0\">$5686</h4>\r\n                            <span>Analytics Output</span>\r\n                        </div>\r\n                        <div class=\"media-right text-right\">\r\n                            <i class=\"icon-share-alt font-large-1 blue\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div id=\"Widget-area-chart6\" class=\"height-150 WidgetAreaChart6 WidgetAreaChart6shadow mb-2\">\r\n                    <x-chartist class=\"\" [data]=\"WidgetAreaChart6.data\" [type]=\"WidgetAreaChart6.type\" [options]=\"WidgetAreaChart6.options\" [responsiveOptions]=\"WidgetAreaChart6.responsiveOptions\"\r\n                        [events]=\"WidgetAreaChart6.events\">\r\n                    </x-chartist>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--Statistics cards Ends-->\r\n<div class=\"row\" matchHeight=\"card\">\r\n    <div class=\"col-xl-8 col-lg-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <div class=\"card-title-wrap bar-warning\">\r\n                    <h4 class=\"card-title mb-0\">Sales Analysis</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div id=\"line-area6\" class=\"height-350 lineArea6 lineArea6Shadow\">\r\n                        <x-chartist [data]=\"lineArea6.data\" [type]=\"lineArea6.type\" [options]=\"lineArea6.options\" [responsiveOptions]=\"lineArea6.responsiveOptions\"\r\n                            [events]=\"lineArea6.events\">\r\n                        </x-chartist>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header pb-0\">\r\n                <div class=\"card-title-wrap bar-info\">\r\n                    <h4 class=\"card-title\">Chat</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block chat-application\">\r\n                    <div class=\"chats height-300 overflow-y-scroll\">\r\n                        <div class=\"chats\">\r\n                          <div class=\"chat\">\r\n                            <div class=\"chat-avatar\">\r\n                              <a class=\"avatar\" data-toggle=\"tooltip\" href=\"#\" data-placement=\"right\" title=\"\" data-original-title=\"\">\r\n                                  <img src=\"assets/img/portrait/small/avatar-s-19.jpg\" alt=\"avatar\" />\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"chat-body\">\r\n                              <div class=\"chat-content\">\r\n                                <p>How can we help? We're here for you!</p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"chat chat-left\">\r\n                            <div class=\"chat-avatar\">\r\n                              <a class=\"avatar\" data-toggle=\"tooltip\" href=\"#\" data-placement=\"left\" title=\"\" data-original-title=\"\">\r\n                                <img src=\"assets/img/portrait/small/avatar-s-15.jpg\" alt=\"avatar\" />\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"chat-body\">\r\n                              <div class=\"chat-content\">\r\n                                <p>Hey Jacob, Could you please help me to find it out?</p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"chat\">\r\n                            <div class=\"chat-avatar\">\r\n                              <a class=\"avatar\" data-toggle=\"tooltip\" href=\"#\" data-placement=\"right\" title=\"\" data-original-title=\"\">\r\n                                <img src=\"assets/img/portrait/small/avatar-s-19.jpg\" alt=\"avatar\" />\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"chat-body\">\r\n                              <div class=\"chat-content\">\r\n                                <p>Absolutely!</p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"chat chat-left\">\r\n                            <div class=\"chat-avatar\">\r\n                              <a class=\"avatar\" data-toggle=\"tooltip\" href=\"#\" data-placement=\"left\" title=\"\" data-original-title=\"\">\r\n                                <img src=\"assets/img/portrait/small/avatar-s-15.jpg\" alt=\"avatar\" />\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"chat-body\">\r\n                              <div class=\"chat-content\">\r\n                                <p>I am looking for the best Angular admin template.</p>\r\n                                <p>It should be Bootstrap 4 compatible.</p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"chat\">\r\n                            <div class=\"chat-avatar\">\r\n                              <a class=\"avatar\" data-toggle=\"tooltip\" href=\"#\" data-placement=\"right\" title=\"\" data-original-title=\"\">\r\n                                <img src=\"assets/img/portrait/small/avatar-s-19.jpg\" alt=\"avatar\" />\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"chat-body\">\r\n                              <div class=\"chat-content\">\r\n                                <p>Convex admin template is responsive Angular 6+ bootstrap 4 admin template.</p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"chat chat-left\">\r\n                            <div class=\"chat-avatar\">\r\n                              <a class=\"avatar\" data-toggle=\"tooltip\" href=\"#\" data-placement=\"left\" title=\"\" data-original-title=\"\">\r\n                                <img src=\"assets/img/portrait/small/avatar-s-15.jpg\" alt=\"avatar\" />\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"chat-body\">\r\n                              <div class=\"chat-content\">\r\n                                <p>Looks clean and fresh UI.</p>\r\n                              </div>\r\n                              <div class=\"chat-content\">\r\n                                <p>It's perfect for my next project.</p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"chat\">\r\n                            <div class=\"chat-avatar\">\r\n                              <a class=\"avatar\" data-toggle=\"tooltip\" href=\"#\" data-placement=\"right\" title=\"\" data-original-title=\"\">\r\n                                <img src=\"assets/img/portrait/small/avatar-s-19.jpg\" alt=\"avatar\" />\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"chat-body\">\r\n                              <div class=\"chat-content\">\r\n                                <p>Thanks a lot!</p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"chat chat-left\">\r\n                            <div class=\"chat-avatar\">\r\n                              <a class=\"avatar\" data-toggle=\"tooltip\" href=\"#\" data-placement=\"left\" title=\"\" data-original-title=\"\">\r\n                                <img src=\"assets/img/portrait/small/avatar-s-15.jpg\" alt=\"avatar\" />\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"chat-body\">\r\n                                <div class=\"chat-content\">\r\n                                  <p>How can I purchase it?</p>\r\n                                </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"chat\">\r\n                            <div class=\"chat-avatar\">\r\n                              <a class=\"avatar\" data-toggle=\"tooltip\" href=\"#\" data-placement=\"right\" title=\"\" data-original-title=\"\">\r\n                                <img src=\"assets/img/portrait/small/avatar-s-19.jpg\" alt=\"avatar\" />\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"chat-body\">\r\n                              <div class=\"chat-content\">\r\n                                <p>From Wrapbootstrap.</p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"chat chat-left\">\r\n                            <div class=\"chat-avatar\">\r\n                              <a class=\"avatar\" data-toggle=\"tooltip\" href=\"#\" data-placement=\"left\" title=\"\" data-original-title=\"\">\r\n                                <img src=\"assets/img/portrait/small/avatar-s-15.jpg\" alt=\"avatar\" />\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"chat-body\">\r\n                              <div class=\"chat-content\">\r\n                                <p>I will purchase it for sure.</p>\r\n                              </div>\r\n                              <div class=\"chat-content\">\r\n                                <p>Thanks.</p>\r\n                              </div>              \r\n                            </div>\r\n                          </div>\r\n                          <div class=\"chat\">\r\n                            <div class=\"chat-avatar\">\r\n                              <a class=\"avatar\" data-toggle=\"tooltip\" href=\"#\" data-placement=\"right\" title=\"\" data-original-title=\"\">\r\n                                <img src=\"assets/img/portrait/small/avatar-s-19.jpg\" alt=\"avatar\" />\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"chat-body\">\r\n                              <div class=\"chat-content\">\r\n                                <p>Great!!</p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                    </div>\r\n                    <form class=\"chat-app-input mt-4 row\">\r\n                      <fieldset class=\"form-group position-relative has-icon-left col-xl-10 col-lg-8 col-8 m-0 mb-1\">\r\n                        <div class=\"form-control-position\">\r\n                          <i class=\"icon-emoticon-smile\"></i>\r\n                        </div>\r\n                        <input type=\"text\" class=\"form-control\" id=\"iconLeft4\" placeholder=\"Type your message\">\r\n                        <div class=\"form-control-position control-position-right\">\r\n                          <i class=\"ft-image\"></i>\r\n                        </div>\r\n                      </fieldset>\r\n                      <fieldset class=\"form-group position-relative has-icon-left col-2 m-0\">\r\n                        <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-paper-plane white\"></i> </button>\r\n                      </fieldset>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Table -->\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <div class=\"card-title-wrap bar-warning\">\r\n                    <h4 class=\"card-title\">Invoice Summary</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"table-responsive\">\r\n                        <table id=\"recent-orders\" class=\"table table-hover table-xl mb-0\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class=\"border-top-0\">Status</th>                                \r\n                                    <th class=\"border-top-0\">Invoice#</th>\r\n                                    <th class=\"border-top-0\">Customer Name</th>\r\n                                    <th class=\"border-top-0\">Products</th>\r\n                                    <th class=\"border-top-0\">Categories</th>\r\n                                    <th class=\"border-top-0\">Shipping</th>\r\n                                    <th class=\"border-top-0\">Amount</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td class=\"text-truncate\"><i class=\"fa fa-dot-circle-o success font-medium-1 mr-1\"></i> Paid</td>\r\n                                    <td class=\"text-truncate\"><a href=\"#\">INV-001001</a></td>\r\n                                    <td class=\"text-truncate\">\r\n                                        <span class=\"avatar avatar-xs\">\r\n                                            <img class=\"box-shadow-2\" src=\"assets/img/portrait/small/avatar-s-4.jpg\" alt=\"avatar\">\r\n                                        </span>\r\n                                        <span>Elizabeth W.</span>\r\n                                    </td>\r\n                                    <td class=\"text-truncate p-1\">\r\n                                        <ul class=\"list-unstyled users-list m-0\">                                               \r\n                                            <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Kimberly Simmons\" class=\"avatar avatar-sm pull-up\">\r\n                                                <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-1.jpg\" alt=\"Avatar\">\r\n                                            </li>\r\n                                            <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Willie Torres\" class=\"avatar avatar-sm pull-up\">\r\n                                                <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-2.jpg\" alt=\"Avatar\">\r\n                                            </li>\r\n                                            <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Rebecca Jones\" class=\"avatar avatar-sm pull-up\">\r\n                                                <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-4.jpg\" alt=\"Avatar\">\r\n                                            </li>\r\n                                            <li class=\"avatar avatar-sm\">                                            \r\n                                                <span class=\"badge badge-info\">+1 more</span>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </td>\r\n                                    <td>\r\n                                        <button type=\"button\" class=\"btn btn-sm btn-outline-danger round\">Food</button>\r\n                                    </td>\r\n                                    <td>\r\n                                        <ngb-progressbar type=\"danger\" [value]=\"25\" [striped]=\"true\" class=\"progress-bar-md bg-gradient-x-danger\"></ngb-progressbar>\r\n                                    </td>\r\n                                    <td class=\"text-truncate\">$ 1200.00</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-truncate\"><i class=\"fa fa-dot-circle-o danger font-medium-1 mr-1\"></i> Declined</td>\r\n                                    <td class=\"text-truncate\"><a href=\"#\">INV-001002</a></td>\r\n                                    <td class=\"text-truncate\">\r\n                                        <span class=\"avatar avatar-xs\">\r\n                                            <img class=\"box-shadow-2\" src=\"assets/img/portrait/small/avatar-s-5.jpg\" alt=\"avatar\">\r\n                                        </span>\r\n                                        <span>Doris R.</span>\r\n                                    </td>\r\n                                    <td class=\"text-truncate p-1\">\r\n                                        <ul class=\"list-unstyled users-list m-0\">                                               \r\n                                            <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Kimberly Simmons\" class=\"avatar avatar-sm pull-up\">\r\n                                                <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-5.jpg\" alt=\"Avatar\">\r\n                                            </li>\r\n                                            <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Willie Torres\" class=\"avatar avatar-sm pull-up\">\r\n                                                <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-6.jpg\" alt=\"Avatar\">\r\n                                            </li>                                        \r\n                                            <li class=\"avatar avatar-sm\">                                            \r\n                                                <span class=\"badge badge-info\">+2 more</span>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </td>\r\n                                    <td>\r\n                                        <button type=\"button\" class=\"btn btn-sm btn-outline-warning round\">Electronics</button>\r\n                                    </td>\r\n                                    <td>\r\n                                        <ngb-progressbar type=\"warning\" [value]=\"45\" [striped]=\"true\" class=\"progress-bar-md bg-gradient-x-warning\"></ngb-progressbar>\r\n                                    </td>\r\n                                    <td class=\"text-truncate\">$ 1850.00</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-truncate\"><i class=\"fa fa-dot-circle-o warning font-medium-1 mr-1\"></i> Pending</td>\r\n                                    <td class=\"text-truncate\"><a href=\"#\">INV-001003</a></td>\r\n                                    <td class=\"text-truncate\">\r\n                                        <span class=\"avatar avatar-xs\">\r\n                                            <img class=\"box-shadow-2\" src=\"assets/img/portrait/small/avatar-s-6.jpg\" alt=\"avatar\">\r\n                                        </span>\r\n                                        <span>Megan S.</span>\r\n                                    </td>\r\n                                    <td class=\"text-truncate p-1\">\r\n                                        <ul class=\"list-unstyled users-list m-0\">                                               \r\n                                            <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Kimberly Simmons\" class=\"avatar avatar-sm pull-up\">\r\n                                                <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-2.jpg\" alt=\"Avatar\">\r\n                                            </li>\r\n                                            <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Willie Torres\" class=\"avatar avatar-sm pull-up\">\r\n                                                <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-5.jpg\" alt=\"Avatar\">\r\n                                            </li>\r\n                                        </ul>\r\n                                    </td>\r\n                                    <td>\r\n                                        <button type=\"button\" class=\"btn btn-sm btn-outline-success round\">Groceries</button>\r\n                                    </td>\r\n                                    <td>\r\n                                        <ngb-progressbar type=\"success\" [value]=\"75\" [striped]=\"true\" class=\"progress-bar-md bg-gradient-x-success\"></ngb-progressbar>\r\n                                    </td>\r\n                                    <td class=\"text-truncate\">$ 3200.00</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-truncate\"><i class=\"fa fa-dot-circle-o success font-medium-1 mr-1\"></i> Paid</td>\r\n                                    <td class=\"text-truncate\"><a href=\"#\">INV-001004</a></td>\r\n                                    <td class=\"text-truncate\">\r\n                                        <span class=\"avatar avatar-xs\">\r\n                                            <img class=\"box-shadow-2\" src=\"assets/img/portrait/small/avatar-s-15.jpg\" alt=\"avatar\">\r\n                                        </span>\r\n                                        <span>Andrew D.</span>\r\n                                    </td>\r\n                                    <td class=\"text-truncate p-1\">\r\n                                        <ul class=\"list-unstyled users-list m-0\">                                               \r\n                                            <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Kimberly Simmons\" class=\"avatar avatar-sm pull-up\">\r\n                                                <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-6.jpg\" alt=\"Avatar\">\r\n                                            </li>\r\n                                            <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Willie Torres\" class=\"avatar avatar-sm pull-up\">\r\n                                                <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-1.jpg\" alt=\"Avatar\">\r\n                                            </li>\r\n                                            <li class=\"avatar avatar-sm\">                                            \r\n                                                <span class=\"badge badge-info\">+1 more</span>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </td>\r\n                                    <td>\r\n                                        <button type=\"button\" class=\"btn btn-sm btn-outline-info round\">Apparels</button>\r\n                                    </td>\r\n                                    <td>\r\n                                        <ngb-progressbar type=\"info\" [value]=\"65\" [striped]=\"true\" class=\"progress-bar-md bg-gradient-x-info\"></ngb-progressbar>\r\n                                    </td>\r\n                                    <td class=\"text-truncate\">$ 4500.00</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"text-truncate\"><i class=\"fa fa-dot-circle-o success font-medium-1 mr-1\"></i> Paid</td>\r\n                                    <td class=\"text-truncate\"><a href=\"#\">INV-001005</a></td>\r\n                                    <td class=\"text-truncate\">\r\n                                        <span class=\"avatar avatar-xs\">\r\n                                            <img class=\"box-shadow-2\" src=\"assets/img/portrait/small/avatar-s-9.jpg\" alt=\"avatar\">\r\n                                        </span>\r\n                                        <span>Walter R.</span>\r\n                                    </td>\r\n                                    <td class=\"text-truncate p-1\">\r\n                                        <ul class=\"list-unstyled users-list m-0\">                                               \r\n                                            <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Kimberly Simmons\" class=\"avatar avatar-sm pull-up\">\r\n                                                <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-5.jpg\" alt=\"Avatar\">\r\n                                            </li>\r\n                                            <li data-toggle=\"tooltip\" data-popup=\"tooltip-custom\" data-original-title=\"Willie Torres\" class=\"avatar avatar-sm pull-up\">\r\n                                                <img class=\"media-object rounded-circle no-border-top-radius no-border-bottom-radius\" src=\"assets/img/portfolio/portfolio-3.jpg\" alt=\"Avatar\">\r\n                                            </li>\r\n                                        </ul>\r\n                                    </td>\r\n                                    <td>\r\n                                        <button type=\"button\" class=\"btn btn-sm btn-outline-danger round\">Food</button>\r\n                                    </td>\r\n                                    <td>\r\n                                        <ngb-progressbar type=\"primary\" [value]=\"35\" [striped]=\"true\" class=\"progress-bar-md bg-gradient-x-primary\"></ngb-progressbar>\r\n                                    </td>\r\n                                    <td class=\"text-truncate\">$ 1500.00</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-xl-6 col-lg-12 col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-5 col-md-12\">\r\n                    <div class=\"gradient-bg gradient-ibiza-sunset\">\r\n                        <div class=\"card-body py-5 text-center\">\r\n                            <i class=\"wi wi-day-sunny fa-spin warning font-large-4 lighten-4\"></i>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <h1 class=\"card-title mt-5 py-5 font-large-2 text-center white lighten-2\">Sunny</h1>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-7 col-md-12\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"pt-3\">\r\n                            <h2>Tuesday, 22</h2>\r\n                            <div class=\"card-title font-large-1\">April</div>\r\n                        </div>\r\n                        <div class=\"my-5 py-3\">\r\n                            <h2 class=\"danger\">40&deg; Warm</h2>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col text-center\">\r\n                                <span class=\"display-block text-uppercase\">Wed</span>\r\n                                <i class=\"wi wi-day-sunny display-block danger font-medium-2 my-3\"></i>\r\n                                <span class=\"display-block\">35&deg;</span>\r\n                            </div>\r\n                            <div class=\"col text-center\">\r\n                                <span class=\"display-block text-uppercase\">Thu</span>\r\n                                <i class=\"wi wi-day-cloudy display-block danger font-medium-2 my-3\"></i>\r\n                                <span class=\"display-block\">30&deg;</span>\r\n                            </div>\r\n                            <div class=\"col text-center\">\r\n                                <span class=\"display-block text-uppercase\">Fri</span>\r\n                                <i class=\"wi wi-day-cloudy-gusts display-block danger font-medium-2 my-3\"></i>\r\n                                <span class=\"display-block\">25&deg;</span>\r\n                            </div>\r\n                            <div class=\"col text-center\">\r\n                                <span class=\"display-block text-uppercase\">Sat</span>\r\n                                <i class=\"wi wi-day-cloudy-windy display-block danger font-medium-2 my-3\"></i>\r\n                                <span class=\"display-block\">22&deg;</span>\r\n                            </div>\r\n                            <div class=\"col text-center\">\r\n                                <span class=\"display-block text-uppercase\">Sun</span>\r\n                                <i class=\"wi wi-day-cloudy-windy display-block danger font-medium-2 my-3\"></i>\r\n                                <span class=\"display-block\">20&deg;</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-6 col-lg-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header pb-0\">\r\n                <div class=\"card-title-wrap bar-primary\">\r\n                    <h4 class=\"card-title\">Statistics</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"chart-info mb-2\">\r\n                        <span class=\"text-uppercase mr-3\">\r\n                            <i class=\"fa fa-circle primary font-small-2 mr-1\"></i> Users</span>\r\n                        <span class=\"text-uppercase\">\r\n                            <i class=\"fa fa-circle warning font-small-2 mr-1\"></i> Progress</span>\r\n                    </div>\r\n                    <div id=\"line-chart2\" class=\"height-350 lineChart2 lineChart2Shadow\">\r\n                        <x-chartist class=\"\" [data]=\"lineChart2.data\" [type]=\"lineChart2.type\" [options]=\"lineChart2.options\" [responsiveOptions]=\"lineChart2.responsiveOptions\"\r\n                            [events]=\"lineChart2.events\">\r\n                        </x-chartist>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\" matchHeight=\"card\">\r\n    <div class=\"col-xl-8 col-lg-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header pb-0\">\r\n                <div class=\"card-title-wrap bar-danger\">\r\n                    <h4 class=\"card-title\">User Conversion</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"chart-info mb-2\">\r\n                        <span class=\"text-uppercase mr-3\">\r\n                            <i class=\"fa fa-circle primary font-small-2 mr-1\"></i> Users</span>\r\n                        <span class=\"text-uppercase\">\r\n                            <i class=\"fa fa-circle success font-small-2 mr-1\"></i> Products</span>\r\n                    </div>\r\n                    <div id=\"line-area-chart\" class=\"height-300 lineAreaChart lineAreaChartShadow mb-1\">\r\n                        <x-chartist class=\"\" [data]=\"lineAreaChart.data\" [type]=\"lineAreaChart.type\" [options]=\"lineAreaChart.options\" [responsiveOptions]=\"lineAreaChart.responsiveOptions\"\r\n                            [events]=\"lineAreaChart.events\">\r\n\r\n                        </x-chartist>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <div class=\"card-title-wrap bar-success\">\r\n                    <h4 class=\"card-title mb-0\">Super Analysts</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"media mb-3\">\r\n                        <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-12.jpg\">\r\n                        <div class=\"media-body\">\r\n                            <h4 class=\"font-medium-1 mt-1 mb-0\">Jessie Lee</h4>\r\n                            <span class=\"font-small-3 grey mb-0\">Head of Department</span>\r\n                        </div>\r\n                        <div class=\"text-right\">\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-facebook\">\r\n                                <span class=\"fa fa-facebook\"></span>\r\n                            </a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-twitter\">\r\n                                <span class=\"fa fa-twitter\"></span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"media mb-3\">\r\n                        <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-danger height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-11.jpg\">\r\n                        <div class=\"media-body\">\r\n                            <h4 class=\"font-medium-1 mt-1 mb-0\">Jack Penne</h4>\r\n                            <span class=\"font-small-3 grey mb-0\">Head of Department</span>\r\n                        </div>\r\n                        <div class=\"text-right\">\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-facebook\">\r\n                                <span class=\"fa fa-facebook\"></span>\r\n                            </a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-twitter\">\r\n                                <span class=\"fa fa-twitter\"></span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"media mb-3\">\r\n                        <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-success height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-3.jpg\">\r\n                        <div class=\"media-body\">\r\n                            <h4 class=\"font-medium-1 mt-1 mb-0\">Russez Pinch</h4>\r\n                            <span class=\"font-small-3 grey mb-0\">Head of Department</span>\r\n                        </div>\r\n                        <div class=\"text-right\">\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-facebook\">\r\n                                <span class=\"fa fa-facebook\"></span>\r\n                            </a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-twitter\">\r\n                                <span class=\"fa fa-twitter\"></span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"media mb-3\">\r\n                        <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-warning height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-6.jpg\">\r\n                        <div class=\"media-body\">\r\n                            <h4 class=\"font-medium-1 mt-1 mb-0\">Pinz Colado</h4>\r\n                            <span class=\"font-small-3 grey mb-0\">Head of Department</span>\r\n                        </div>\r\n                        <div class=\"text-right\">\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-facebook\">\r\n                                <span class=\"fa fa-facebook\"></span>\r\n                            </a>\r\n                            <a class=\"btn btn-social-icon mr-2 mb-2 btn-outline-twitter\">\r\n                                <span class=\"fa fa-twitter\"></span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/analytics/analytics.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/analytics/analytics.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host /deep/ .ct-label {\n  font-size: 0.9rem; }\n\n:host /deep/ .WidgetAreaChart4 .ct-series-a .ct-area {\n  fill-opacity: 1;\n  fill: url(\"/dashboard/analytics#wGradient4\") !important; }\n\n:host /deep/ .WidgetAreaChart4 .ct-series-a .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetAreaChart4 .ct-series-a .ct-point-circle {\n  fill: #fa394e;\n  stroke-width: 5;\n  stroke: #fff; }\n\n:host /deep/ .WidgetAreaChart4 .ct-series-a .ct-point-circle-transperent {\n  fill: transparent; }\n\n:host /deep/ .WidgetAreaChart4 .ct-target-line {\n  stroke: #fff;\n  stroke-width: 2px;\n  stroke-dasharray: 4px; }\n\n:host /deep/ .WidgetAreaChart4shadow {\n  -webkit-filter: drop-shadow(0px -5px 2px rgba(0, 0, 0, 0.2));\n  filter: drop-shadow(0px -5px 2px rgba(0, 0, 0, 0.2));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .WidgetAreaChart5 .ct-series-a .ct-area {\n  fill-opacity: 1;\n  fill: url(\"/dashboard/analytics#wGradient5\") !important; }\n\n:host /deep/ .WidgetAreaChart5 .ct-series-a .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetAreaChart5 .ct-series-a .ct-point-circle {\n  fill: #6d3da7;\n  stroke-width: 5;\n  stroke: #fff; }\n\n:host /deep/ .WidgetAreaChart5 .ct-series-a .ct-point-circle-transperent {\n  fill: transparent; }\n\n:host /deep/ .WidgetAreaChart5 .ct-target-line {\n  stroke: #fff;\n  stroke-width: 2px;\n  stroke-dasharray: 4px; }\n\n:host /deep/ .WidgetAreaChart5shadow {\n  -webkit-filter: drop-shadow(0px -5px 2px rgba(0, 0, 0, 0.2));\n  filter: drop-shadow(0px -5px 2px rgba(0, 0, 0, 0.2));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .WidgetAreaChart6 .ct-series-a .ct-area {\n  fill-opacity: 1;\n  fill: url(\"/dashboard/analytics#wGradient6\") !important; }\n\n:host /deep/ .WidgetAreaChart6 .ct-series-a .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetAreaChart6 .ct-series-a .ct-point-circle {\n  fill: #6d64f3;\n  stroke-width: 5;\n  stroke: #fff; }\n\n:host /deep/ .WidgetAreaChart6 .ct-series-a .ct-point-circle-transperent {\n  fill: transparent; }\n\n:host /deep/ .WidgetAreaChart6 .ct-target-line {\n  stroke: #fff;\n  stroke-width: 2px;\n  stroke-dasharray: 4px; }\n\n:host /deep/ .WidgetAreaChart6shadow {\n  -webkit-filter: drop-shadow(0px -5px 2px rgba(0, 0, 0, 0.2));\n  filter: drop-shadow(0px -5px 2px rgba(0, 0, 0, 0.2));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .lineAreaChart .ct-series-a .ct-area {\n  fill-opacity: 0.7;\n  fill: url(\"/dashboard/analytics#laGradient1\") !important; }\n\n:host /deep/ .lineAreaChart .ct-series-b .ct-area {\n  fill: url(\"/dashboard/analytics#laGradient\") !important;\n  fill-opacity: 0.9; }\n\n:host /deep/ .lineAreaChart .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .lineAreaChart .ct-series-b .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .lineAreaChart .ct-series-b .ct-point-circle {\n  display: none; }\n\n:host /deep/ .lineAreaChart .ct-series-b .ct-point-circle-transperent {\n  display: none; }\n\n:host /deep/ .lineAreaChart .ct-series-a .ct-point-circle {\n  fill: url(\"/dashboard/analytics#laGradient1\");\n  stroke-width: 3;\n  stroke: #fff; }\n\n:host /deep/ .lineAreaChartShadow {\n  -webkit-filter: drop-shadow(0px -8px 4px rgba(0, 0, 0, 0.2));\n  filter: drop-shadow(0px -8px 4px rgba(0, 0, 0, 0.2));\n  /* Same syntax as box-shadow, except \r\n                                                           for the spread property */ }\n\n:host /deep/ .lineAreaChart .ct-series-a .ct-point-circle-transperent {\n  fill: transparent; }\n\n:host /deep/ .lineChart2 .ct-series.ct-series-a .ct-line {\n  stroke: url(\"/dashboard/analytics#lineGradient1\") !important;\n  stroke-width: 3px; }\n\n:host /deep/ .lineChart2 .ct-series.ct-series-a .ct-circle {\n  fill: url(\"/dashboard/analytics#lineGradient1\") !important;\n  stroke-width: 3;\n  stroke: #fff; }\n\n:host /deep/ .lineChart2 .ct-series.ct-series-b .ct-line {\n  stroke: url(\"/dashboard/analytics#lineGradient2\") !important;\n  stroke-width: 3px; }\n\n:host /deep/ .lineChart2 .ct-series.ct-series-b .ct-circle {\n  fill: url(\"/dashboard/analytics#lineGradient2\") !important;\n  stroke-width: 3;\n  stroke: #fff; }\n\n:host /deep/ .lineChart2Shadow {\n  -webkit-filter: drop-shadow(0px 14px 4px rgba(0, 0, 0, 0.2));\n  filter: drop-shadow(0px 14px 4px rgba(0, 0, 0, 0.2));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .lineArea6 .ct-series-a .ct-area {\n  fill-opacity: 1;\n  fill: url(\"/dashboard/analytics#gradient6\") !important; }\n\n:host /deep/ .lineArea6 .ct-series.ct-series-a .ct-line {\n  stroke: url(\"/dashboard/analytics#linear6\") !important;\n  stroke-width: 13px; }\n\n:host /deep/ .lineArea6 .ct-series.ct-series-a .ct-point-circle {\n  fill: url(\"/dashboard/analytics#linear6\") !important;\n  stroke-width: 5;\n  stroke: #fff; }\n\n:host /deep/ .lineArea6 .ct-series-a .ct-point-circle-transperent {\n  fill: transparent; }\n\n:host /deep/ .lineArea6Shadow {\n  -webkit-filter: drop-shadow(0px -8px 4px rgba(0, 0, 0, 0.2));\n  filter: drop-shadow(0px -8px 4px rgba(0, 0, 0, 0.2));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2FuYWx5dGljcy9DOlxcVXNlcnNcXE1SVDIwXFxEZXNrdG9wXFxVTVxcdXNlcm1hbmFnZW1lbnQvc3JjXFxhcHBcXGRhc2hib2FyZFxcYW5hbHl0aWNzXFxhbmFseXRpY3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxzQkFBcUI7RUFDckIsMkJBQTBCLEVBQzdCOztBQUVEO0VBQ0ksa0JBQWlCLEVBQ3BCOztBQUtEO0VBQ0ksZ0JBQWU7RUFDZix3REFBNEQsRUFDL0Q7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBR0Q7RUFDSSxjQUFZO0VBQUMsZ0JBQWM7RUFBQyxhQUFZLEVBQzFDOztBQUVEO0VBQ0csa0JBQWlCLEVBQ25COztBQUVEO0VBQ0csYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixzQkFBcUIsRUFDdEI7O0FBRUQ7RUFDRSw2REFBMkQ7RUFDbkQscURBQW1EO0VBQUU7aUZBQ2dCLEVBQ2hGOztBQU9EO0VBQ0ksZ0JBQWU7RUFDZix3REFBNEQsRUFDL0Q7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBR0Q7RUFDSSxjQUFZO0VBQUMsZ0JBQWM7RUFBQyxhQUFZLEVBQzFDOztBQUVEO0VBQ0csa0JBQWlCLEVBQ25COztBQUVEO0VBQ0csYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixzQkFBcUIsRUFDdEI7O0FBRUQ7RUFDRSw2REFBMkQ7RUFDbkQscURBQW1EO0VBQUU7aUZBQ2dCLEVBQ2hGOztBQVFEO0VBQ0ksZ0JBQWU7RUFDZix3REFBNEQsRUFDL0Q7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBR0Q7RUFDSSxjQUFZO0VBQUMsZ0JBQWM7RUFBQyxhQUFZLEVBQzFDOztBQUVEO0VBQ0csa0JBQWlCLEVBQ25COztBQUVEO0VBQ0csYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixzQkFBcUIsRUFDdEI7O0FBRUQ7RUFDRSw2REFBMkQ7RUFDbkQscURBQW1EO0VBQUU7aUZBQ2dCLEVBQ2hGOztBQU9DO0VBQ0Usa0JBQWlCO0VBQ2pCLHlEQUE4RCxFQUNqRTs7QUFFRDtFQUNJLHdEQUE2RDtFQUM3RCxrQkFBaUIsRUFDcEI7O0FBT0Q7RUFDSSxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxrQkFBaUIsRUFDcEI7O0FBR0Q7RUFHUSxjQUFhLEVBRWhCOztBQUxMO0VBUVEsY0FBYSxFQUVoQjs7QUFHTDtFQUNJLDhDQUFrRDtFQUNsRCxnQkFBYztFQUNkLGFBQVcsRUFDZDs7QUFFRDtFQUNRLDZEQUEyRDtFQUNuRCxxREFBbUQ7RUFBRTtxRkFDZ0IsRUFFcEY7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDbkI7O0FBU0Y7RUFBMkQsNkRBQWlFO0VBQUUsa0JBQWlCLEVBQUk7O0FBQ25KO0VBQTJELDJEQUE4RDtFQUFDLGdCQUFjO0VBQUMsYUFBVyxFQUFHOztBQUV2SjtFQUEyRCw2REFBaUU7RUFBRSxrQkFBaUIsRUFBSTs7QUFDbko7RUFBMkQsMkRBQThEO0VBQUMsZ0JBQWM7RUFBQyxhQUFXLEVBQUc7O0FBR3ZKO0VBQ0ksNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRjs7QUFJRDtFQUNJLGdCQUFlO0VBQ2YsdURBQTJELEVBQzlEOztBQUdEO0VBQTBELHVEQUEyRDtFQUFFLG1CQUFrQixFQUFJOztBQUM3STtFQUFnRSxxREFBd0Q7RUFBQyxnQkFBYztFQUFDLGFBQVcsRUFBRzs7QUFJdEo7RUFDRyxrQkFBaUIsRUFDbkI7O0FBRUQ7RUFDSSw2REFBMkQ7RUFDbkQscURBQW1EO0VBQUU7aUZBQ2dCLEVBRWhGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2FuYWx5dGljcy9hbmFseXRpY3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3Mvc2Nzcy9ncmFkaWVudC12YXJpYWJsZXNcIjtcclxuXHJcbjpob3N0IC9kZWVwLyAuY3QtZ3JpZHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDBweDtcclxuICAgIHN0cm9rZTogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmN0LWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcblxyXG4vLyBXaWRnZXQgYXJlYSA0IENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0QXJlYUNoYXJ0NCAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEge1xyXG4gICAgZmlsbC1vcGFjaXR5OiAxO1xyXG4gICAgZmlsbDp1cmwoJGFuYWx5dGljcy1ncmFkaWVudC1wYXRoICsgICN3R3JhZGllbnQ0KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLldpZGdldEFyZWFDaGFydDQgLmN0LXNlcmllcy1hIC5jdC1saW5le1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuXHJcblxyXG46aG9zdCAvZGVlcC8gLldpZGdldEFyZWFDaGFydDQgLmN0LXNlcmllcy1hIC5jdC1wb2ludC1jaXJjbGUgeyAgICAgXHJcbiAgICBmaWxsOiNmYTM5NGU7c3Ryb2tlLXdpZHRoOjU7c3Ryb2tlOiAjZmZmOyBcclxuIH1cclxuIFxyXG4gOmhvc3QgL2RlZXAvIC5XaWRnZXRBcmVhQ2hhcnQ0IC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlLXRyYW5zcGVyZW50IHsgICAgIFxyXG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XHJcbiB9XHJcblxyXG4gOmhvc3QgL2RlZXAvIC5XaWRnZXRBcmVhQ2hhcnQ0IC5jdC10YXJnZXQtbGluZSB7XHJcbiAgICBzdHJva2U6ICNmZmY7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDRweDtcclxuICB9XHJcblxyXG4gIDpob3N0IC9kZWVwLyAuV2lkZ2V0QXJlYUNoYXJ0NHNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAtNXB4IDJweCByZ2JhKDAsMCwwLDAuMikgKTtcclxuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IC01cHggMnB4IHJnYmEoMCwwLDAsMC4yKSApOyAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcblxyXG5cclxuLy8gV2lkZ2V0IGFyZWEgNCBDaGFydCBDU1MgRW5kc1xyXG5cclxuLy8gV2lkZ2V0IGFyZWEgNSBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLldpZGdldEFyZWFDaGFydDUgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcclxuICAgIGZpbGwtb3BhY2l0eTogMTtcclxuICAgIGZpbGw6dXJsKCRhbmFseXRpY3MtZ3JhZGllbnQtcGF0aCArICAjd0dyYWRpZW50NSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5XaWRnZXRBcmVhQ2hhcnQ1IC5jdC1zZXJpZXMtYSAuY3QtbGluZXtcclxuICAgIHN0cm9rZS13aWR0aDogMHB4O1xyXG59XHJcblxyXG5cclxuOmhvc3QgL2RlZXAvIC5XaWRnZXRBcmVhQ2hhcnQ1IC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlIHsgICAgIFxyXG4gICAgZmlsbDojNmQzZGE3O3N0cm9rZS13aWR0aDo1O3N0cm9rZTogI2ZmZjsgXHJcbiB9XHJcbiBcclxuIDpob3N0IC9kZWVwLyAuV2lkZ2V0QXJlYUNoYXJ0NSAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZS10cmFuc3BlcmVudCB7ICAgICBcclxuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xyXG4gfVxyXG5cclxuIDpob3N0IC9kZWVwLyAuV2lkZ2V0QXJlYUNoYXJ0NSAuY3QtdGFyZ2V0LWxpbmUge1xyXG4gICAgc3Ryb2tlOiAjZmZmO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiA0cHg7XHJcbiAgfVxyXG5cclxuICA6aG9zdCAvZGVlcC8gLldpZGdldEFyZWFDaGFydDVzaGFkb3cge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggLTVweCAycHggcmdiYSgwLDAsMCwwLjIpICk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAtNXB4IDJweCByZ2JhKDAsMCwwLDAuMikgKTsgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cclxufVxyXG5cclxuXHJcbi8vIFdpZGdldCBhcmVhIDUgQ2hhcnQgQ1NTIEVuZHNcclxuXHJcblxyXG4vLyBXaWRnZXQgYXJlYSA2IENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0QXJlYUNoYXJ0NiAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEge1xyXG4gICAgZmlsbC1vcGFjaXR5OiAxO1xyXG4gICAgZmlsbDp1cmwoJGFuYWx5dGljcy1ncmFkaWVudC1wYXRoICsgICN3R3JhZGllbnQ2KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLldpZGdldEFyZWFDaGFydDYgLmN0LXNlcmllcy1hIC5jdC1saW5le1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuXHJcblxyXG46aG9zdCAvZGVlcC8gLldpZGdldEFyZWFDaGFydDYgLmN0LXNlcmllcy1hIC5jdC1wb2ludC1jaXJjbGUgeyAgICAgXHJcbiAgICBmaWxsOiM2ZDY0ZjM7c3Ryb2tlLXdpZHRoOjU7c3Ryb2tlOiAjZmZmOyBcclxuIH1cclxuIFxyXG4gOmhvc3QgL2RlZXAvIC5XaWRnZXRBcmVhQ2hhcnQ2IC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlLXRyYW5zcGVyZW50IHsgICAgIFxyXG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XHJcbiB9XHJcblxyXG4gOmhvc3QgL2RlZXAvIC5XaWRnZXRBcmVhQ2hhcnQ2IC5jdC10YXJnZXQtbGluZSB7XHJcbiAgICBzdHJva2U6ICNmZmY7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDRweDtcclxuICB9XHJcblxyXG4gIDpob3N0IC9kZWVwLyAuV2lkZ2V0QXJlYUNoYXJ0NnNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAtNXB4IDJweCByZ2JhKDAsMCwwLDAuMikgKTtcclxuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IC01cHggMnB4IHJnYmEoMCwwLDAsMC4yKSApOyAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcblxyXG5cclxuLy8gV2lkZ2V0IGFyZWEgNiBDaGFydCBDU1MgRW5kc1xyXG5cclxuICAvLyBMaW5lIGFyZWEgY2hhcnQgQ1NTIFN0YXJ0c1xyXG5cclxuICA6aG9zdCAvZGVlcC8gLmxpbmVBcmVhQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcclxuICAgIGZpbGwtb3BhY2l0eTogMC43O1xyXG4gICAgZmlsbDogdXJsKCRhbmFseXRpY3MtZ3JhZGllbnQtcGF0aCArICAjbGFHcmFkaWVudDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWFDaGFydCAuY3Qtc2VyaWVzLWIgLmN0LWFyZWEge1xyXG4gICAgZmlsbDogdXJsKCRhbmFseXRpY3MtZ3JhZGllbnQtcGF0aCArICAjbGFHcmFkaWVudCkgIWltcG9ydGFudDtcclxuICAgIGZpbGwtb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG4vLyA6aG9zdCAvZGVlcC8gLmxpbmVBcmVhQ2hhcnQgLmN0LXNlcmllcy1iIC5jdC1hcmVhIHtcclxuLy8gICAgIGZpbGw6ICNmZjhkNjA7XHJcbi8vICAgICBmaWxsLW9wYWNpdHk6IDAuMTtcclxuLy8gfVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYUNoYXJ0IC5jdC1saW5le1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYUNoYXJ0IC5jdC1zZXJpZXMtYiAuY3QtcG9pbnQge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuXHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhQ2hhcnQgLmN0LXNlcmllcy1ie1xyXG4gICAgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICAgICAgLy8gZmlsbDp1cmwoJGFuYWx5dGljcy1ncmFkaWVudC1wYXRoICsgICNsYUdyYWRpZW50KTtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIC8vIHN0cm9rZTojZmZmO1xyXG4gICAgfVxyXG4gICAgLmN0LXBvaW50LWNpcmNsZS10cmFuc3BlcmVudCAge1xyXG4gICAgICAgIC8vIGZpbGw6dXJsKCRhbmFseXRpY3MtZ3JhZGllbnQtcGF0aCArICAjbGFHcmFkaWVudCk7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAvLyBzdHJva2U6I2ZmZjtcclxuICAgIH1cclxufSBcclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWFDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBmaWxsOnVybCgkYW5hbHl0aWNzLWdyYWRpZW50LXBhdGggKyAgI2xhR3JhZGllbnQxKTtcclxuICAgIHN0cm9rZS13aWR0aDozO1xyXG4gICAgc3Ryb2tlOiNmZmY7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAgLmxpbmVBcmVhQ2hhcnRTaGFkb3d7XHJcbiAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggLThweCA0cHggcmdiYSgwLDAsMCwwLjIpICk7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggLThweCA0cHggcmdiYSgwLDAsMCwwLjIpICk7IC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG5cclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYUNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlLXRyYW5zcGVyZW50IHsgICAgIFxyXG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XHJcbiB9XHJcblxyXG5cclxuLy8gTGluZSBhcmVhIGNoYXJ0IENTUyBFbmRzXHJcblxyXG4vL0xpbmUgY2hhcnQgMiBDU1MgU3RhcnRzXHJcblxyXG5cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0MiAuY3Qtc2VyaWVzLmN0LXNlcmllcy1hIC5jdC1saW5lIHsgc3Ryb2tlOiB1cmwoJGFuYWx5dGljcy1ncmFkaWVudC1wYXRoICsgI2xpbmVHcmFkaWVudDEpICFpbXBvcnRhbnQ7IHN0cm9rZS13aWR0aDogM3B4OyB9XHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0MiAuY3Qtc2VyaWVzLmN0LXNlcmllcy1hIC5jdC1jaXJjbGV7ZmlsbDp1cmwoJGFuYWx5dGljcy1ncmFkaWVudC1wYXRoICsgI2xpbmVHcmFkaWVudDEpICFpbXBvcnRhbnQ7c3Ryb2tlLXdpZHRoOjM7c3Ryb2tlOiNmZmY7fVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQyIC5jdC1zZXJpZXMuY3Qtc2VyaWVzLWIgLmN0LWxpbmUgeyBzdHJva2U6IHVybCgkYW5hbHl0aWNzLWdyYWRpZW50LXBhdGggKyAjbGluZUdyYWRpZW50MikgIWltcG9ydGFudDsgc3Ryb2tlLXdpZHRoOiAzcHg7IH1cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQyIC5jdC1zZXJpZXMuY3Qtc2VyaWVzLWIgLmN0LWNpcmNsZXtmaWxsOnVybCgkYW5hbHl0aWNzLWdyYWRpZW50LXBhdGggKyAjbGluZUdyYWRpZW50MikgIWltcG9ydGFudDtzdHJva2Utd2lkdGg6MztzdHJva2U6I2ZmZjt9XHJcblxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQyU2hhZG93IHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDE0cHggNHB4IHJnYmEoMCwwLDAsMC4yKSApO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMTRweCA0cHggcmdiYSgwLDAsMCwwLjIpICk7IC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXHJcbn1cclxuLy9MaW5lIGNoYXJ0IDIgQ1NTIEVuZHNcclxuXHJcbi8vIExpbmVBcmVhIENoYXJ0IDYgQ1NTIFN0YXJ0c1xyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhNiAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEge1xyXG4gICAgZmlsbC1vcGFjaXR5OiAxO1xyXG4gICAgZmlsbDp1cmwoJGFuYWx5dGljcy1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiAgXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWE2IC5jdC1zZXJpZXMuY3Qtc2VyaWVzLWEgLmN0LWxpbmUgeyBzdHJva2U6IHVybCgkYW5hbHl0aWNzLWdyYWRpZW50LXBhdGggKyAjbGluZWFyNikgIWltcG9ydGFudDsgc3Ryb2tlLXdpZHRoOiAxM3B4OyB9XHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWE2IC5jdC1zZXJpZXMuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZXtmaWxsOnVybCgkYW5hbHl0aWNzLWdyYWRpZW50LXBhdGggKyAjbGluZWFyNikgIWltcG9ydGFudDtzdHJva2Utd2lkdGg6NTtzdHJva2U6I2ZmZjt9XHJcbiAgICBcclxuXHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhNiAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZS10cmFuc3BlcmVudCB7ICAgICBcclxuICAgZmlsbDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAgLmxpbmVBcmVhNlNoYWRvd3tcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IC04cHggNHB4IHJnYmEoMCwwLDAsMC4yKSApO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggLThweCA0cHggcmdiYSgwLDAsMCwwLjIpICk7IC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXHJcblxyXG59XHJcblxyXG4vLyBMaW5lQXJlYSBDaGFydCA2IENTUyBFbmRzIl19 */"

/***/ }),

/***/ "./src/app/dashboard/analytics/analytics.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/analytics/analytics.component.ts ***!
  \************************************************************/
/*! exports provided: AnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function() { return AnalyticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var data = __webpack_require__(/*! ../../shared/data/chartist.json */ "./src/app/shared/data/chartist.json");
var AnalyticsComponent = /** @class */ (function () {
    function AnalyticsComponent() {
        // Widget Area chart 4 configuration Starts
        this.WidgetAreaChart4 = {
            type: 'Line', data: data['WidgetAreaChart2'],
            options: {
                axisX: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0,
                },
                axisY: {
                    showGrid: false,
                    low: 0,
                    showLabel: false,
                    offset: 0,
                },
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_1__["Interpolation"].simple({
                    divisor: 2
                }),
                fullWidth: true,
                showArea: true,
                onlyInteger: true
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'wGradient4',
                        x1: 1,
                        y1: 0,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(250,81,61, 0.8)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(250,55,79, 0.8)'
                    });
                },
                draw: function (data) {
                    var circleRadius = 7;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: data.value.y === 3 || data.value.y === 45 ? 'ct-point-circle-transperent' : 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                }
            },
        };
        // Widget Area chart 4 configuration Ends
        // Widget Area chart 5 configuration Starts
        this.WidgetAreaChart5 = {
            type: 'Line', data: data['WidgetAreaChart2'],
            options: {
                axisX: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0,
                },
                axisY: {
                    showGrid: false,
                    low: 0,
                    showLabel: false,
                    offset: 0,
                },
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_1__["Interpolation"].simple({
                    divisor: 2
                }),
                fullWidth: true,
                showArea: true,
                onlyInteger: true
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'wGradient5',
                        x1: 1,
                        y1: 0,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(255, 0, 204, 0.5)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(51, 51, 153, 1)'
                    });
                },
                draw: function (data) {
                    var circleRadius = 7;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: data.value.y === 3 || data.value.y === 45 ? 'ct-point-circle-transperent' : 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                }
            },
        };
        // Widget Area chart 5 configuration Ends
        // Widget Area chart 6 configuration Starts
        this.WidgetAreaChart6 = {
            type: 'Line', data: data['WidgetAreaChart2'],
            options: {
                axisX: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0,
                },
                axisY: {
                    showGrid: false,
                    low: 0,
                    showLabel: false,
                    offset: 0,
                },
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_1__["Interpolation"].simple({
                    divisor: 2
                }),
                fullWidth: true,
                showArea: true,
                onlyInteger: true
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'wGradient6',
                        x1: 1,
                        y1: 0,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(56, 184, 242, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(132, 60, 247, 1)'
                    });
                },
                draw: function (data) {
                    var circleRadius = 7;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: data.value.y === 3 || data.value.y === 45 ? 'ct-point-circle-transperent' : 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                }
            },
        };
        // Widget Area chart 6 configuration Ends
        // Line area chart configuration Starts
        this.lineAreaChart = {
            type: 'Line',
            data: data['lineArea3'],
            options: {
                low: 0,
                showArea: true,
                fullWidth: true,
                onlyInteger: true,
                axisY: {
                    low: 0,
                    scaleMinSpace: 50,
                },
                axisX: {
                    showGrid: false
                }
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'laGradient',
                        x1: 0,
                        y1: 1,
                        x2: 1,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(0, 201, 255, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(146, 254, 157, 1)'
                    });
                    defs.elem('linearGradient', {
                        id: 'laGradient1',
                        x1: 0,
                        y1: 1,
                        x2: 1,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(132, 60, 247, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(56, 184, 242, 1)'
                    });
                },
                draw: function (data) {
                    var circleRadius = 6;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: data.value.y === 0 ? 'ct-point-circle-transperent' : 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                }
            },
        };
        // Line area chart configuration Ends
        // Line chart configuration Starts
        this.lineChart2 = {
            type: 'Line', data: data['line2'],
            options: {
                axisX: {
                    showGrid: false,
                },
                axisY: {
                    low: 0,
                    scaleMinSpace: 50,
                },
                fullWidth: true,
            },
            responsiveOptions: [
                ['screen and (max-width: 640px) and (min-width: 381px)', {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 2 === 0 ? value : null;
                            }
                        }
                    }],
                ['screen and (max-width: 380px)', {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 3 === 0 ? value : null;
                            }
                        }
                    }]
            ],
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'lineGradient1',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(252,157,48, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(250,91,76, 1)'
                    });
                    defs.elem('linearGradient', {
                        id: 'lineGradient2',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(45,121,255,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(249,81,255, 1)'
                    });
                },
                draw: function (data) {
                    var circleRadius = 8;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: 'ct-circle'
                        });
                        data.element.replace(circle);
                    }
                    else if (data.type === 'label') {
                        // adjust label position for rotation
                        var dX = data.width / 2 + (30 - data.width);
                        data.element.attr({ x: data.element.attr('x') - dX });
                    }
                }
            },
        };
        // Line chart configuration Ends
        // Line with Area Chart 6 Starts
        this.lineArea6 = {
            type: 'Line',
            data: data['lineArea6'],
            options: {
                low: 0,
                fullWidth: true,
                showArea: true,
                onlyInteger: true,
                axisY: {
                    low: 0,
                    scaleMinSpace: 50,
                },
                axisX: {
                    showGrid: false
                },
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'linear6',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(45,121,255,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(249,81,255, 1)'
                    });
                    defs.elem('linearGradient', {
                        id: 'gradient6',
                        x1: 0,
                        y1: 0,
                        x2: 1,
                        y2: 0
                    }).elem('stop', {
                        offset: 0.2,
                        'stop-color': 'rgba(200,220,255, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(247,250,255, 1)'
                    });
                },
                draw: function (data) {
                    var circleRadius = 10;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: data.value.y === 15 ? 'ct-point-circle' : 'ct-point-circle-transperent'
                        });
                        data.element.replace(circle);
                    }
                }
            },
        };
        // Line with Area Chart 6 Ends
    }
    AnalyticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analytics',
            template: __webpack_require__(/*! ./analytics.component.html */ "./src/app/dashboard/analytics/analytics.component.html"),
            styles: [__webpack_require__(/*! ./analytics.component.scss */ "./src/app/dashboard/analytics/analytics.component.scss")]
        })
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/chart/chart.component.html":
/*!******************************************************!*\
  !*** ./src/app/dashboard/chart/chart.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"!isSuperAdmin\">\r\n  <div class=\"col-xl-3 col-lg-6 col-12\" *ngFor=\"let tile of tiles\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"media align-items-stretch\">\r\n          <div class=\"p-2 text-center rounded-left pt-3\" [ngStyle]=\"{ 'background-color': tile.color }\">\r\n            <i class=\"{{tile.icon}} font-large-2 text-white\"></i>\r\n          </div>\r\n          <div class=\"p-2 media-body\">\r\n            <h6>{{tile.name}}</h6>\r\n            <h5 class=\"text-bold-400 mb-0\">{{tile.count}}</h5>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"isSuperAdmin\">\r\n  <div class=\"col-xl-3 col-lg-6 col-12\" *ngFor=\"let tile of widgets\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"media align-items-stretch\">\r\n          <div class=\"p-2 text-center rounded-left pt-3\" [ngStyle]=\"{ 'background-color': tile.color }\">\r\n            <i class=\"{{tile.icon}} font-large-2 text-white\"></i>\r\n          </div>\r\n          <div class=\"p-2 media-body\">\r\n            <h6>{{tile.name}}</h6>\r\n            <h5 class=\"text-bold-400 mb-0\">{{tile.count}}</h5>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"!isSuperAdmin\">\r\n    <div class=\"col-lg-6 col-12\" *ngFor=\"let chart of charts\">\r\n      <div class=\"card\">\r\n          <div class=\"card-header\">\r\n              <div class=\"card-title-wrap bar-success\">\r\n                  <h4 class=\"card-title\">{{chart.name}}</h4>\r\n              </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n              <div class=\"card-block\">\r\n                  <div class=\"height-400\" *ngIf=\"chart.chartType == 'line'\">\r\n                      <ngx-charts-line-chart [scheme]=\"ChartColorScheme\" [results]=\"chart.layout\" [gradient]=\"false\" [xAxis]=\"true\" [yAxis]=\"true\"\r\n                        [legend]=\"false\" [yAxisTicks]=\"chart.yAxisTicks\" [showXAxisLabel]=\"true\" [showYAxisLabel]=\"true\" [xAxisLabel]=\"chart.xaxis\" [yAxisLabel]=\"chart.yaxis\" [autoScale]=\"true\">\r\n                      </ngx-charts-line-chart>\r\n                  </div>\r\n                  <div class=\"height-400\" *ngIf=\"chart.chartType == 'bar'\">\r\n                      <ngx-charts-bar-vertical [scheme]=\"ChartColorScheme\" [results]=\"chart.layout\" [gradient]=\"false\" [xAxis]=\"true\"\r\n                          [yAxis]=\"true\" [legend]=\"false\" [showXAxisLabel]=\"true\"\r\n                          [showYAxisLabel]=\"true\" [yAxisTicks]=\"chart.yAxisTicks\" [xAxisLabel]=\"chart.xaxis\" [yAxisLabel]=\"chart.yaxis\">\r\n                      </ngx-charts-bar-vertical>\r\n                  </div>\r\n                  <div class=\"height-400\" *ngIf=\"chart.chartType == 'pie'\">\r\n                      <ngx-charts-pie-chart [scheme]=\"ChartColorScheme\" [results]=\"chart.layout\" [legend]=\"true\" [explodeSlices]=\"false\"\r\n                          [labels]=\"true\" [doughnut]=\"false\" [gradient]=\"false\">\r\n                      </ngx-charts-pie-chart>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <div class=\"card-title-wrap bar-success\">\r\n                    <h4 class=\"card-title\">{{barChartName}}</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div id=\"line-chart1\" class=\"height-400\">\r\n                        <ngx-charts-bar-vertical [scheme]=\"barChartColorScheme\" [results]=\"barChartSingle\" [gradient]=\"false\" [xAxis]=\"true\"\r\n                            [yAxis]=\"true\" [legend]=\"false\" [showXAxisLabel]=\"true\"\r\n                            [showYAxisLabel]=\"true\" [xAxisLabel]=\"barChartXAxisLabel\" [yAxisLabel]=\"barChartYAxisLabel\">\r\n                        </ngx-charts-bar-vertical>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <div class=\"card-title-wrap bar-success\">\r\n                    <h4 class=\"card-title\">{{barChartName}}</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                  <div id=\"pie-chart1\" class=\"height-400\">\r\n                      <ngx-charts-pie-chart [scheme]=\"pieChartColorScheme\" [results]=\"pieChartSingle\" [legend]=\"true\" [explodeSlices]=\"false\"\r\n                          [labels]=\"true\" [doughnut]=\"false\" [gradient]=\"false\">\r\n                      </ngx-charts-pie-chart>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"isSuperAdmin\">\r\n    <div class=\"col-lg-6 col-12\" *ngFor=\"let chart of chartsForAdmin\">\r\n      <div class=\"card\">\r\n          <div class=\"card-header\">\r\n              <div class=\"card-title-wrap bar-success\">\r\n                  <h4 class=\"card-title\">{{chart.name}}</h4>\r\n              </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n              <div class=\"card-block\">\r\n                  <div class=\"height-400\">\r\n                      <ngx-charts-bar-vertical [scheme]=\"ChartColorScheme\" [results]=\"chart.layout\" [gradient]=\"false\" [xAxis]=\"true\"\r\n                          [yAxis]=\"true\" [legend]=\"false\" [showXAxisLabel]=\"true\"\r\n                          [showYAxisLabel]=\"true\" [yAxisTicks]=\"chart.yAxisTicks\" [xAxisLabel]=\"chart.xaxis\" [yAxisLabel]=\"chart.yaxis\">\r\n                      </ngx-charts-bar-vertical>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n<!--<div class=\"row\" *ngIf=\"isSuperAdmin\">-->\r\n  <div class=\"row\" >\r\n    <div class=\"col-lg-6 col-12\" *ngFor=\"let chart of fbbarChartSingle;let i =index;\"> \r\n     <!--  <div class=\"row\" > -->\r\n        <!-- <div class=\"col-lg-6 col-12\" > -->\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <div class=\"card-title-wrap bar-success\">\r\n               <!--  <h4 class=\"card-title\">{{chart.name}}</h4> -->\r\n               <h4 class=\"card-title\">{{chartnames[i]}}</h4>\r\n             </div>\r\n           </div>\r\n           <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n              <div class=\"height-400\">\r\n                <ngx-charts-bar-vertical\r\n                [view]=\"view\"\r\n                [scheme]=\"ChartColorScheme\"\r\n                [results]=\"chart\"\r\n                [gradient]=\"false\"\r\n                [xAxis]=\"true\"\r\n                [yAxis]=\"true\"\r\n                [legend]=\"false\"\r\n                [showXAxisLabel]=\"true\"\r\n                [showYAxisLabel]=\"true\"\r\n                [xAxisLabel]=\"chartxlabel[i]\"\r\n                [yAxisLabel]=\"chartylabel[i]\">\r\n              </ngx-charts-bar-vertical>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n   <!--  </div> -->\r\n</div> \r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/chart/chart.component.scss":
/*!******************************************************!*\
  !*** ./src/app/dashboard/chart/chart.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jaGFydC9jaGFydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/chart/chart.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/chart/chart.component.ts ***!
  \****************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_chart_congig_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/data/chart-congig.service */ "./src/app/shared/data/chart-congig.service.ts");
/* harmony import */ var _shared_data_organization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data/organization.service */ "./src/app/shared/data/organization.service.ts");
/* harmony import */ var _shared_data_feedback_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/data/feedback.service */ "./src/app/shared/data/feedback.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*sandeep*/

/*sandeep e*/
var ChartComponent = /** @class */ (function () {
    function ChartComponent(feedbackservice, chartService, organizationService) {
        var _this = this;
        this.feedbackservice = feedbackservice;
        this.chartService = chartService;
        this.organizationService = organizationService;
        this.ChartColorScheme = {
            domain: ['#666EE8', '#FF9149', '#FF4961', '#AAAAAA']
        };
        this.barChartSingle = [];
        this.barChartColorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        this.pieChartColorScheme = {
            domain: ['#666EE8', '#28D094', '#FF4961', '#AAAAAA']
        };
        this.pieChartSingle = [
            {
                "name": "Germany",
                "value": 894
            },
            {
                "name": "USA",
                "value": 500
            },
            {
                "name": "France",
                "value": 720
            }
        ];
        this.isSuperAdmin = false;
        this.formsData = [];
        this.submissions = [];
        this.fbbarChartSingle = [];
        this.formatedData = [];
        this.formsDataSelected = [];
        this.chartnames = [];
        this.chartxlabel = [];
        this.chartylabel = [];
        // this.lineChartMulti = [
        //   {
        //     "name": "Users Count",
        //     "series": []
        //   }
        // ];
        // this.barChartSingle = [];
        var users = JSON.parse(localStorage.getItem('currentUser'));
        if (users['role_id'] == '2') {
            this.isSuperAdmin = true;
        }
        this.organizationService.getListCount().then(function (data) {
            console.log('LIST Count - ' + JSON.stringify(data));
        });
        this.chartService.buildCharts(1).then(function (data) {
            if (data['status'] == 'success') {
                //console.log(data['buildCharts']);
                var chartData = [];
                for (var i = 0; i < data['buildCharts'].length; i++) {
                    //console.log(data['buildCharts'][i]['chartData']);
                    if (data['buildCharts'][i]['chartData'] != '') {
                        if (data['buildCharts'][i]['chartType'] == 'line') {
                            var lineChartData = [
                                {
                                    "name": data['buildCharts'][i]['Name'],
                                    "series": []
                                }
                            ];
                            var lineyAxisTicks = [];
                            for (var j = 0; j < data['buildCharts'][i]['chartData'].length; j++) {
                                lineChartData[0].series.push({ "name": data['buildCharts'][i]['chartData'][j]['name'], "value": parseInt(data['buildCharts'][i]['chartData'][j]['count']) });
                                lineyAxisTicks.push(parseInt(data['buildCharts'][i]['chartData'][j]['count']));
                            }
                            chartData.push({ "layout": lineChartData.slice(), "yAxisTicks": lineyAxisTicks, "name": data['buildCharts'][i]['Name'], "chartType": data['buildCharts'][i]['chartType'], "xaxis": data['buildCharts'][i]['xvalues'], "yaxis": data['buildCharts'][i]['yvalues'] });
                            //console.log(chartData);
                        }
                        var baryAxisTicks = [];
                        if (data['buildCharts'][i]['chartType'] == 'bar') {
                            var barChartData = [];
                            for (var j = 0; j < data['buildCharts'][i]['chartData'].length; j++) {
                                barChartData.push({ "name": data['buildCharts'][i]['chartData'][j]['name'], "value": parseInt(data['buildCharts'][i]['chartData'][j]['count']) });
                            }
                            chartData.push({ "layout": barChartData.slice(), "yAxisTicks": baryAxisTicks, "name": data['buildCharts'][i]['Name'], "chartType": data['buildCharts'][i]['chartType'], "xaxis": data['buildCharts'][i]['xvalues'], "yaxis": data['buildCharts'][i]['yvalues'] });
                            //console.log(chartData);
                        }
                        if (data['buildCharts'][i]['chartType'] == 'pie') {
                            var pieChartData = [];
                            for (var j = 0; j < data['buildCharts'][i]['chartData'].length; j++) {
                                pieChartData.push({ "name": data['buildCharts'][i]['chartData'][j]['name'], "value": parseInt(data['buildCharts'][i]['chartData'][j]['count']) });
                                baryAxisTicks.push(parseInt(data['buildCharts'][i]['chartData'][j]['count']));
                            }
                            chartData.push({ "layout": pieChartData.slice(), "name": data['buildCharts'][i]['Name'], "chartType": data['buildCharts'][i]['chartType'], "xaxis": data['buildCharts'][i]['xvalues'], "yaxis": data['buildCharts'][i]['yvalues'] });
                            //console.log(chartData);
                        }
                    }
                }
                _this.charts = chartData;
                console.log(_this.charts);
                // this.lineChartXAxisLabel = data['buildCharts']['chartdata'][0]['xvalues'];
                // this.lineChartYAxisLabel = data['buildCharts']['chartdata'][0]['yvalues'];
                // this.lineChartName = data['buildCharts']['chartdata'][0]['Name'];
                // for(let i = 0; i < data['buildCharts']['userplots'].length; i++){
                //   this.lineChartMulti[0].series.push({'name' : data['buildCharts']['userplots'][i]['date'], 'value' : parseInt(data['buildCharts']['userplots'][i]['userCount'])})
                // }
                // this.lineChartMulti = [...this.lineChartMulti];
                // console.log(this.lineChartMulti);
                //
                // // bar chart
                // this.barChartXAxisLabel = data['buildCharts']['chartdata'][1]['xvalues'];
                // this.barChartYAxisLabel = data['buildCharts']['chartdata'][1]['yvalues'];
                // this.barChartName = data['buildCharts']['chartdata'][1]['Name'];
                // for(let i = 0; i < data['buildCharts']['membershipplots'].length; i++){
                //   this.barChartSingle.push({'name' : data['buildCharts']['membershipplots'][i]['plans'], 'value' : parseInt(data['buildCharts']['membershipplots'][i]['usercount'])})
                // }
                // this.barChartSingle = [...this.barChartSingle];
            }
            //console.log(this.barChartSingle);
        });
        this.organizationService.getCharts().then(function (data) {
            if (data['status'] == 'success') {
                var charts = ['org', 'list', 'subscriber', 'membership', 'email', 'campaign'];
                var chartNames = ['Number of Organizations', 'Number of Lists', 'Number of Subscribers', 'Number of Memberships', 'Number of Emails Sent', 'Number of Campaign'];
                var chartData = [];
                for (var j = 0; j < charts.length; j++) {
                    var graph = [];
                    var yAxisTicks = [];
                    for (var i = 0; i < data['charts'][charts[j]].length; i++) {
                        graph.push({ "name": data['charts'][charts[j]][i]['date'], "value": parseInt(data['charts'][charts[j]][i]['count']) });
                        yAxisTicks.push(parseInt(data['charts'][charts[j]][i]['count']));
                    }
                    chartData.push({ "layout": graph.slice(), "yAxisTicks": yAxisTicks, "name": chartNames[j], "chartType": 'bar', "xaxis": 'Dates', "yaxis": 'Counts' });
                }
                console.log("sandeep" + JSON.stringify(chartData));
                _this.chartsForAdmin = chartData;
            }
        });
    }
    ChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chartService.getTiles(1, new Date().getTime()).then(function (data) {
            if (data['status'] == 'success') {
                _this.tiles = data['tiles'];
            }
        });
        this.organizationService.getTiles().then(function (data) {
            if (data['status'] == 'success') {
                //console.log('Count of tiles - ' + JSON.stringify(data));
                var tiles = ['list', 'subscriber', 'membership', 'email_sent', 'campaign'];
                var tileNames = ['Lists', 'Subscribers', 'Memberships', 'Emails Sent', 'Campaign'];
                var chartData = [];
                for (var j = 0; j < tiles.length; j++) {
                    var tileData = [];
                    for (var i = 0; i < data['tiles'][tiles[j]].length; i++) {
                        chartData.push({ "name": tileNames[j], "icon": data['tiles'][tiles[j]][i]['icon'], "color": data['tiles'][tiles[j]][i]['color'], "count": parseInt(data['tiles'][tiles[j]][i]['count']) });
                    }
                    console.log('chartData - ' + JSON.stringify(chartData));
                    _this.widgets = chartData;
                }
            }
        });
        /*sandeep*/
        //formsDataSelected;
        this.feedbackservice.getfbDashboardCharts().then(function (data) {
            if (data['status'] == 'success') {
                console.log("a1" + JSON.stringify(data));
                var allFormsData = data['chartdata'];
                //console.log("a2"+JSON.stringify(allFormsData[0]));
                //console.log("a3"+JSON.stringify(allFormsData[0]['form_data']));
                //console.log("a4"+JSON.stringify(allFormsData[0]['form_data']));
                for (var i = 0; i < allFormsData.length; i++) {
                    _this.chartnames[i] = allFormsData[i]['name'];
                    _this.chartxlabel[i] = allFormsData[i]['xvalues'];
                    _this.chartylabel[i] = allFormsData[i]['yvalues'];
                    _this.formsDataSelected[i] = allFormsData[i]['form_data']['components'].filter(function (val) { return (val.key != 'submit' && (val.type == 'radio' || val.type == 'select' || val.type == 'selectboxes')); });
                    var id = btoa(allFormsData[i]['campaignid']);
                    var filters = {
                        "sdate": allFormsData[i]['from_date'],
                        "edate": allFormsData[i]['to_date'],
                        "tblmap": allFormsData[i]['filters']
                    };
                    _this.getSubmissions(id, allFormsData[i]['qkey'], i, filters);
                }
                //this.onSelectQuestion(allFormsData[0]['qkey']);
                // for(let i=0; i<allFormsData.length;i++){
                //   let data = allFormsData[i]['form_data']['components'].filter(val => (val.key !='submit' && (val.type == 'radio' || val.type == 'select' || val.type == 'selectboxes')));
                //   this.formsData.push(data);
                // }
            }
        });
        /*sandeep e*/
    };
    //barChartXAxisLabel = 'Options';
    //barChartYAxisLabel = 'Count';
    /*sandeep */
    ChartComponent.prototype.getSubmissions = function (id, key, index, filters) {
        // this.feedbackservice.getSubmissionsById(id).then(data => {
        //   //alert(JSON.stringify(data));
        //   console.log("getSubmissions" + JSON.stringify(data));
        //   if (data['status'] == "success") {
        //     this.submissions[index] = data['subs'];
        var _this = this;
        //     //calling submissions function
        //     this.onSelectQuestion(key,index);
        //     //console.log("submissions"+JSON.stringify(this.submissions));
        //   }
        // })
        this.feedbackservice.getSubmissionsByIdFilter(id, filters).then(function (data) {
            console.log("getSubmissions" + JSON.stringify(data));
            if (data['status'] == "success") {
                _this.submissions[index] = data['subs'];
                _this.onSelectQuestion(key, index);
            }
        });
    };
    ChartComponent.prototype.onSelectQuestion = function (keyVal, index) {
        this.qSelected = keyVal;
        var labelsObj = [];
        var valuesAll = [];
        var labels = [];
        var valuesCount = [];
        for (var i = 0; i < this.formsDataSelected[index].length; i++) {
            if (this.formsDataSelected[index][i]['key'] == keyVal) {
                console.log("control type" + this.formsDataSelected[index][i]['type']);
                if (this.formsDataSelected[index][i]['type'] == 'radio' || this.formsDataSelected[index][i]['type'] == 'selectboxes') {
                    labelsObj.push(this.formsDataSelected[index][i].values);
                    //labels.push(this.formsDataSelected[index][i].values[0][i]);  
                }
                if (this.formsDataSelected[index][i]['type'] == 'select') {
                    labelsObj.push(this.formsDataSelected[index][i]['data'].values);
                }
            }
        }
        var _loop_1 = function (i) {
            var myObj = JSON.parse(this_1.submissions[index][i]['sub_data']);
            var myData = myObj.data;
            //if(this.formsDataSelected[i]['type'] == 'radio' || this.formsDataSelected[i]['type'] == 'select'){
            Object.keys(myData).forEach(function (key) {
                if (key == keyVal) {
                    //for checkbox list multi options exist           
                    if (typeof (myData[key]) == 'object') {
                        console.log(JSON.stringify(myData[key]));
                        Object.keys(myData[key]).forEach(function (objkey) {
                            //alert(objkey);
                            if (myData[key][objkey] == true) {
                                valuesAll.push(objkey);
                            }
                        });
                    }
                    else {
                        valuesAll.push(myData[key]);
                    }
                }
            });
            //}
            // else if( this.formsDataSelected[i]['type'] == 'selectboxes'){
            // }
        };
        var this_1 = this;
        //let subs = JSON.parse(this.submissions['sub_data']);
        for (var i = 0; i < this.submissions[index].length; i++) {
            _loop_1(i);
        }
        var counts = {};
        for (var i = 0; i < valuesAll.length; i++) {
            var num = valuesAll[i];
            counts[num] = counts[num] ? counts[num] + 1 : 1;
        }
        for (var i = 0; i < labelsObj[0].length; i++) {
            labels.push(labelsObj[0][i].label);
            var count = counts[labelsObj[0][i].value];
            if (!count) {
                count = 0;
            }
            // if(count){
            //   valuesCount.push(count);
            // }
            // else{
            //   valuesCount.push(0);
            // }
            if (i == 0) {
                this.formatedData[index] = [];
            }
            this.formatedData[index].push({
                "name": labelsObj[0][i].label,
                "value": count
            });
        }
        //this.data.lineArea6.labels = labels;
        //  this.data.lineArea6.series[0] = valuesCount;
        //console.log(JSON.stringify(this.barChartSingle));
        this.fbbarChartSingle[index] = this.formatedData[index];
        //     this.barChartSingle = [
        //   {
        //     "name": "Germany",
        //     "value": 1000
        //   },
        //   {
        //     "name": "USA",
        //     "value": 200
        //   },
        //   {
        //     "name": "France",
        //     "value": 111
        //   },
        //   {
        //     "name": "Australia",
        //     "value": 650
        //   }
        // ];
        console.log("fbbarChartSingle" + JSON.stringify(this.fbbarChartSingle[index]));
    };
    ChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__(/*! ./chart.component.html */ "./src/app/dashboard/chart/chart.component.html"),
            styles: [__webpack_require__(/*! ./chart.component.scss */ "./src/app/dashboard/chart/chart.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_data_feedback_service__WEBPACK_IMPORTED_MODULE_3__["FeedbackService"], _shared_data_chart_congig_service__WEBPACK_IMPORTED_MODULE_1__["ChartCongigService"], _shared_data_organization_service__WEBPACK_IMPORTED_MODULE_2__["OrganizationService"]])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _eCommerce_eCommerce_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eCommerce/eCommerce.component */ "./src/app/dashboard/eCommerce/eCommerce.component.ts");
/* harmony import */ var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analytics/analytics.component */ "./src/app/dashboard/analytics/analytics.component.ts");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/dashboard/chart/chart.component.ts");
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
                path: 'eCommerce',
                component: _eCommerce_eCommerce_component__WEBPACK_IMPORTED_MODULE_2__["EcommerceComponent"],
                data: {
                    title: 'eCommerce'
                }
            },
            {
                path: 'analytics',
                component: _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_3__["AnalyticsComponent"],
                data: {
                    title: 'Analytics'
                }
            },
            {
                path: 'charts',
                component: _chart_chart_component__WEBPACK_IMPORTED_MODULE_4__["ChartComponent"],
                data: {
                    title: 'Charts'
                }
            },
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/dist/ng-chartist.js");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_chartist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/directives/match-height.directive */ "./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var _eCommerce_eCommerce_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./eCommerce/eCommerce.component */ "./src/app/dashboard/eCommerce/eCommerce.component.ts");
/* harmony import */ var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./analytics/analytics.component */ "./src/app/dashboard/analytics/analytics.component.ts");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/dashboard/chart/chart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                ng_chartist__WEBPACK_IMPORTED_MODULE_3__["ChartistModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_6__["MatchHeightModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"]
            ],
            exports: [],
            declarations: [
                _eCommerce_eCommerce_component__WEBPACK_IMPORTED_MODULE_7__["EcommerceComponent"],
                _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_8__["AnalyticsComponent"],
                _chart_chart_component__WEBPACK_IMPORTED_MODULE_9__["ChartComponent"]
            ],
            providers: [],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/eCommerce/eCommerce.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/eCommerce/eCommerce.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Statistics cards Starts-->\r\n<div class=\"row\">\r\n  <div class=\"col-xl-4 col-lg-6 col-md-6 col-12\">\r\n    <div class=\"card bg-white\">\r\n      <div class=\"card-body\">\r\n        <div class=\"card-block pt-2 pb-0\">\r\n          <div class=\"media\">\r\n            <div class=\"media-body text-left\">\r\n              <h4 class=\"font-medium-5 card-title mb-0\">$5789</h4>\r\n              <span>Total Visits</span>\r\n            </div>\r\n            <div class=\"media-right text-right\">\r\n              <i class=\"icon-cup font-large-1 primary\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"Widget-area-chart1\" class=\"height-150 WidgetAreaChart1 mb-2\">\r\n          <x-chartist class=\"\" [data]=\"WidgetAreaChart1.data\" [type]=\"WidgetAreaChart1.type\" [options]=\"WidgetAreaChart1.options\" [responsiveOptions]=\"WidgetAreaChart1.responsiveOptions\" [events]=\"WidgetAreaChart1.events\">\r\n          </x-chartist>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xl-4 col-lg-6 col-md-6 col-12\">\r\n    <div class=\"card bg-white\">\r\n      <div class=\"card-body\">\r\n        <div class=\"card-block pt-2 pb-0\">\r\n          <div class=\"media\">\r\n            <div class=\"media-body text-left\">\r\n              <h4 class=\"font-medium-5 card-title mb-0\">$4567</h4>\r\n              <span>Total Sales</span>\r\n            </div>\r\n            <div class=\"media-right text-right\">\r\n              <i class=\"icon-wallet font-large-1 warning\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"Widget-area-chart2\" class=\"height-150 WidgetAreaChart2 mb-2\">\r\n          <x-chartist class=\"\" [data]=\"WidgetAreaChart2.data\" [type]=\"WidgetAreaChart2.type\" [options]=\"WidgetAreaChart2.options\" [responsiveOptions]=\"WidgetAreaChart2.responsiveOptions\" [events]=\"WidgetAreaChart2.events\">\r\n          </x-chartist>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xl-4 col-lg-6 col-md-6 col-12\">\r\n    <div class=\"card bg-white\">\r\n      <div class=\"card-body\">\r\n        <div class=\"card-block pt-2 pb-0\">\r\n          <div class=\"media\">\r\n            <div class=\"media-body text-left\">\r\n              <h4 class=\"font-medium-5 card-title mb-0\">$9822</h4>\r\n              <span>Total Value</span>\r\n            </div>\r\n            <div class=\"media-right text-right\">\r\n              <i class=\"icon-basket-loaded font-large-1 success\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"Widget-area-chart3\" class=\"height-150 WidgetAreaChart3 mb-2\">\r\n          <x-chartist class=\"\" [data]=\"WidgetAreaChart3.data\" [type]=\"WidgetAreaChart3.type\" [options]=\"WidgetAreaChart3.options\" [responsiveOptions]=\"WidgetAreaChart3.responsiveOptions\" [events]=\"WidgetAreaChart3.events\">\r\n          </x-chartist>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--Statistics cards Ends-->\r\n<!--Line with Area Chart 1 Starts-->\r\n<div class=\"row\">\r\n  <div class=\"col-xl-8 col-lg-12 col-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <div class=\"card-title-wrap bar-success\">\r\n          <h4 class=\"card-title\">Product Valuation</h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"card-block\">\r\n          <div id=\"line-chart\" class=\"height-300 lineChart lineChartShadow\">\r\n            <x-chartist [data]=\"lineChart.data\" [type]=\"lineChart.type\" [options]=\"lineChart.options\" [responsiveOptions]=\"lineChart.responsiveOptions\" [events]=\"lineChart.events\">\r\n            </x-chartist>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xl-4 col-lg-12 col-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <div class=\"card-title-wrap bar-danger\">\r\n          <h4 class=\"card-title\">Today's Activity</h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"col-12 timeline-left\" id=\"activity\">\r\n          <div class=\"timeline\">\r\n            <ul class=\"list-unstyled base-timeline activity-timeline\">\r\n              <li class=\"\">\r\n                <div class=\"timeline-icon bg-danger\">\r\n                  <i class=\"fa fa-tasks\"></i>\r\n                </div>\r\n                <div class=\"act-time\">Today</div>\r\n                <div class=\"base-timeline-info\">\r\n                  <a href=\"#\" class=\"text-uppercase text-danger\">Task Added</a>\r\n                </div>\r\n                <small class=\"text-muted\">\r\n                                    25 mins ago\r\n                                </small>\r\n              </li>\r\n              <li class=\"\">\r\n                <div class=\"timeline-icon bg-primary\">\r\n                  <i class=\"fa fa-handshake-o\"></i>\r\n                </div>\r\n                <div class=\"act-time\">Yesterday</div>\r\n                <div class=\"base-timeline-info\">\r\n                  <a href=\"#\" class=\"text-uppercase text-primary\">Deal Added</a>\r\n                </div>\r\n                <small class=\"text-muted\">\r\n                                    23 hours ago\r\n                                </small>\r\n              </li>\r\n              <li class=\"\">\r\n                <div class=\"timeline-icon bg-dark\">\r\n                  <i class=\"fa fa-tasks\"></i>\r\n                </div>\r\n                <div class=\"act-time\">09 March</div>\r\n                <div class=\"base-timeline-info\">\r\n                  <a href=\"#\" class=\"text-uppercase text-dark\">Task Updated</a>\r\n                </div>\r\n                <small class=\"text-muted\">\r\n                                    15 days ago\r\n                                </small>\r\n              </li>\r\n              <li class=\"\">\r\n                <div class=\"timeline-icon bg-warning\">\r\n                  <i class=\"fa fa-handshake-o\"></i>\r\n                </div>\r\n                <div class=\"act-time\">04 March</div>\r\n                <div class=\"base-timeline-info\">\r\n                  <a href=\"#\" class=\"text-uppercase text-warning\">Started Task</a>\r\n                </div>\r\n                <small class=\"text-muted\">\r\n                                    20 days ago\r\n                                </small>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--Line with Area Chart 1 Ends-->\r\n<div class=\"row\" matchHeight=\"card\">\r\n  <div class=\"col-xl-4 col-lg-12 col-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <div class=\"card-title-wrap bar-warning\">\r\n          <h4 class=\"card-title\">Sales</h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p class=\"font-medium-2 text-muted text-center pb-2\">Last 12 Months Sales</p>\r\n        <div id=\"Stack-bar-chart\" class=\"height-300 Stackbarchart mb-2\">\r\n          <x-chartist class=\"\" [data]=\"Stackbarchart.data\" [type]=\"Stackbarchart.type\" [options]=\"Stackbarchart.options\" [responsiveOptions]=\"Stackbarchart.responsiveOptions\" [events]=\"Stackbarchart.events\">\r\n          </x-chartist>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-12 col-md-8\" id=\"recent-sales\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <div class=\"card-title-wrap bar-primary\">\r\n          <h4 class=\"card-title\">Recent Buyers</h4>\r\n        </div>\r\n        <a class=\"heading-elements-toggle\">\r\n\t\t\t\t\t<i class=\"la la-ellipsis-v font-medium-3\"></i>\r\n\t\t\t\t</a>\r\n      </div>\r\n      <div class=\"card-content mt-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-hover table-xl mb-0\" id=\"recent-orders\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"border-top-0\">Product</th>\r\n                <th class=\"border-top-0\">Customers</th>\r\n                <th class=\"border-top-0\">Categories</th>\r\n                <th class=\"border-top-0\">Popularity</th>\r\n                <th class=\"border-top-0\">Amount</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td class=\"text-truncate\">iPone X</td>\r\n                <td class=\"text-truncate\">Jim</td>\r\n                <td>\r\n                  <button class=\"btn btn-sm btn-outline-danger round mb-0\" type=\"button\">Mobile</button>\r\n                </td>\r\n                <td>\r\n                  <div class=\"box-shadow-2 mt-1\">\r\n                    <ngb-progressbar type=\"danger\" [value]=\"85\" [striped]=\"true\" class=\"progress-bar-md\"></ngb-progressbar>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-truncate\">$ 1200.00</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-truncate\">iPad</td>\r\n                <td class=\"text-truncate\">Jack</td>\r\n                <td>\r\n                  <button class=\"btn btn-sm btn-outline-success round mb-0\" type=\"button\">Tablet</button>\r\n                </td>\r\n                <td>\r\n                  <div class=\"box-shadow-2 mt-1\">\r\n                    <ngb-progressbar type=\"success\" [value]=\"75\" [striped]=\"true\" class=\"progress-bar-md\"></ngb-progressbar>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-truncate\">$ 1190.00</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-truncate\">OnePlus</td>\r\n                <td class=\"text-truncate\">Dolly</td>\r\n                <td>\r\n                  <button class=\"btn btn-sm btn-outline-danger round mb-0\" type=\"button\">Mobile</button>\r\n                </td>\r\n                <td>\r\n                  <div class=\"box-shadow-2 mt-1\">\r\n                    <ngb-progressbar type=\"danger\" [value]=\"70\" [striped]=\"true\" class=\"progress-bar-md\"></ngb-progressbar>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-truncate\">$ 999.00</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-truncate\">ZenPad</td>\r\n                <td class=\"text-truncate\">Sam</td>\r\n                <td>\r\n                  <button class=\"btn btn-sm btn-outline-success round mb-0\" type=\"button\">Tablet</button>\r\n                </td>\r\n                <td>\r\n                  <div class=\"box-shadow-2 mt-1\">\r\n                    <ngb-progressbar type=\"success\" [value]=\"60\" [striped]=\"true\" class=\"progress-bar-md\"></ngb-progressbar>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-truncate\">$ 1150.00</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-truncate\">Pixel 2</td>\r\n                <td class=\"text-truncate\">John</td>\r\n                <td>\r\n                  <button class=\"btn btn-sm btn-outline-danger round mb-0\" type=\"button\">Mobile</button>\r\n                </td>\r\n                <td>\r\n                  <div class=\"box-shadow-2 mt-1\">\r\n                    <ngb-progressbar type=\"danger\" [value]=\"45\" [striped]=\"true\" class=\"progress-bar-md\"></ngb-progressbar>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-truncate\">$ 1180.00</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-truncate\">Pixel 2</td>\r\n                <td class=\"text-truncate\">John</td>\r\n                <td>\r\n                  <button class=\"btn btn-sm btn-outline-danger round mb-0\" type=\"button\">Mobile</button>\r\n                </td>\r\n                <td>\r\n                  <div class=\"box-shadow-2 mt-1\">\r\n                    <ngb-progressbar type=\"danger\" [value]=\"45\" [striped]=\"true\" class=\"progress-bar-md\"></ngb-progressbar>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-truncate\">$ 1180.00</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-truncate\">Pixel 1</td>\r\n                <td class=\"text-truncate\">Tony</td>\r\n                <td>\r\n                  <button class=\"btn btn-sm btn-outline-danger round mb-0\" type=\"button\">Mobile</button>\r\n                </td>\r\n                <td>\r\n                  <div class=\"box-shadow-2 mt-1\">\r\n                    <ngb-progressbar type=\"danger\" [value]=\"45\" [striped]=\"true\" class=\"progress-bar-md\"></ngb-progressbar>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-truncate\">$ 1080.00</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" matchHeight=\"card\">\r\n  <div class=\"col-xl-6 col-lg-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <div class=\"card-title-wrap bar-primary\">\r\n          <h4 class=\"card-title\">Product Statistics</h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p class=\"font-medium-2 text-muted text-center\">Hobbies</p>\r\n        <div id=\"bar-chart\" class=\"height-250 BarChartShadow BarChart\">\r\n          <x-chartist class=\"\" [data]=\"BarChart.data\" [type]=\"BarChart.type\" [options]=\"BarChart.options\" [responsiveOptions]=\"BarChart.responsiveOptions\" [events]=\"BarChart.events\">\r\n          </x-chartist>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col text-center\">\r\n              <span class=\"gradient-pomegranate d-block rounded-circle mx-auto mb-2\" style=\"width:10px; height:10px;\"></span>\r\n              <span class=\"font-large-1 d-block mb-2\">48</span>\r\n              <span>Sport</span>\r\n            </div>\r\n            <div class=\"col text-center\">\r\n              <span class=\"gradient-green-tea d-block rounded-circle mx-auto mb-2\" style=\"width:10px; height:10px;\"></span>\r\n              <span class=\"font-large-1 d-block mb-2\">9</span>\r\n              <span>Music</span>\r\n            </div>\r\n            <div class=\"col text-center\">\r\n              <span class=\"gradient-blackberry d-block rounded-circle mx-auto mb-2\" style=\"width:10px; height:10px;\"></span>\r\n              <span class=\"font-large-1 d-block mb-2\">26</span>\r\n              <span>Travel</span>\r\n            </div>\r\n            <div class=\"col text-center\">\r\n              <span class=\"gradient-ibiza-sunset d-block rounded-circle mx-auto mb-2\" style=\"width:10px; height:10px;\"></span>\r\n              <span class=\"font-large-1 d-block mb-2\">17</span>\r\n              <span>News</span>\r\n            </div>\r\n            <div class=\"col text-center\">\r\n              <span class=\"gradient-back-to-earth d-block rounded-circle mx-auto mb-2\" style=\"width:10px; height:10px;\"></span>\r\n              <span class=\"font-large-1 d-block mb-2\">52</span>\r\n              <span>Blog</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xl-6 col-lg-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <div class=\"card-title-wrap bar-warning\">\r\n          <h4 class=\"card-title\">Project Stats</h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p class=\"font-medium-2 text-muted text-center\">Project Tasks</p>\r\n        <div id=\"donut-dashboard-chart\" class=\"height-250 donut donutShadow\">\r\n          <x-chartist class=\"\" [data]=\"DonutChart.data\" [type]=\"DonutChart.type\" [options]=\"DonutChart.options\" [responsiveOptions]=\"DonutChart.responsiveOptions\" [events]=\"DonutChart.events\">\r\n          </x-chartist>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row my-3\">\r\n            <div class=\"col\">\r\n              <span class=\"mb-1 text-muted d-block\">23% - Started</span>\r\n              <div class=\"progress\" style=\"height: 8px;\">\r\n                <div class=\"progress-bar gradient-blackberry\" role=\"progressbar\" style=\"width: 70%;\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <span class=\"mb-1 text-muted d-block\">35% - In Progress</span>\r\n              <div class=\"progress\" style=\"height: 8px;\">\r\n                <div class=\"progress-bar gradient-pomegranate\" role=\"progressbar\" style=\"width: 80%;\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <span class=\"mb-1 text-muted d-block\">14% - Done</span>\r\n              <div class=\"progress\" style=\"height: 8px;\">\r\n                <div class=\"progress-bar gradient-green-tea\" role=\"progressbar\" style=\"width: 60%;\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/eCommerce/eCommerce.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/eCommerce/eCommerce.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host /deep/ .ct-label {\n  font-size: 0.9rem; }\n\n:host /deep/ .lineChart .ct-series.ct-series-a .ct-line {\n  stroke: url(\"/dashboard/eCommerce#linear1\") !important;\n  stroke-width: 5px; }\n\n:host /deep/ .lineChart .ct-series.ct-series-a .ct-circle {\n  fill: url(\"/dashboard/eCommerce#linear1\") !important;\n  stroke-width: 5;\n  stroke: #fff; }\n\n:host /deep/ .lineChart .ct-series.ct-series-a .ct-circle-transperent {\n  fill: transparent;\n  stroke-width: 0; }\n\n:host /deep/ .lineChartShadow {\n  -webkit-filter: drop-shadow(0px 20px 6px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 6px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .Stackbarchart .ct-series-a .ct-bar {\n  stroke: url(\"/dashboard/eCommerce#linear\") !important; }\n\n:host /deep/ .Stackbarchart .ct-series-a .ct-slice-bar {\n  fill: url(\"/dashboard/eCommerce#linear\") !important; }\n\n:host /deep/ .donut .ct-done .ct-slice-donut-solid {\n  fill: url(\"/dashboard/eCommerce#donutGradient1\"); }\n\n:host /deep/ .donut .ct-progress .ct-slice-donut-solid {\n  fill: url(\"/dashboard/eCommerce#donutGradient2\"); }\n\n:host /deep/ .donut .ct-outstanding .ct-slice-donut-solid {\n  fill: url(\"/dashboard/eCommerce#donutGradient3\"); }\n\n:host /deep/ .donut .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 20px;\n  fill: #868e96; }\n\n:host /deep/ .donut .ct-chart-donut .ct-series {\n  stroke: #fff;\n  stroke-width: 3px; }\n\n:host /deep/ .donutShadow {\n  -webkit-filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                               for the spread property */ }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(5n+1),\n:host /deep/ .BarChart .ct-series-a .ct-slice-bar:nth-of-type(5n+1) {\n  stroke: url(\"/dashboard/eCommerce#gradient7\");\n  fill: url(\"/dashboard/eCommerce#gradient7\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(5n+2),\n:host /deep/ .BarChart .ct-series-a .ct-slice-bar:nth-of-type(5n+2) {\n  stroke: url(\"/dashboard/eCommerce#gradient5\");\n  fill: url(\"/dashboard/eCommerce#gradient5\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(5n+3),\n:host /deep/ .BarChart .ct-series-a .ct-slice-bar:nth-of-type(5n+3) {\n  stroke: url(\"/dashboard/eCommerce#gradient6\");\n  fill: url(\"/dashboard/eCommerce#gradient6\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(5n+4),\n:host /deep/ .BarChart .ct-series-a .ct-slice-bar:nth-of-type(5n+4) {\n  stroke: url(\"/dashboard/eCommerce#gradient4\");\n  fill: url(\"/dashboard/eCommerce#gradient4\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(5n+5),\n:host /deep/ .BarChart .ct-series-a .ct-slice-bar:nth-of-type(5n+5) {\n  stroke: url(\"/dashboard/eCommerce#gradient8\");\n  fill: url(\"/dashboard/eCommerce#gradient8\"); }\n\n:host /deep/ .BarChartShadow {\n  -webkit-filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .WidgetAreaChart1 .ct-series-a .ct-area {\n  fill-opacity: 1;\n  fill: url(\"/dashboard/eCommerce#wGradient1\") !important; }\n\n:host /deep/ .WidgetAreaChart1 .ct-series-a .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetAreaChart1 .ct-series-a .ct-point-circle {\n  fill: #fff;\n  stroke-width: 10;\n  stroke: #8249e8; }\n\n:host /deep/ .WidgetAreaChart1 .ct-series-a .ct-point-circle-transperent {\n  fill: transparent; }\n\n:host /deep/ .WidgetAreaChart1 .ct-target-line {\n  stroke: #fff;\n  stroke-width: 2px;\n  stroke-dasharray: 4px; }\n\n:host /deep/ .WidgetAreaChart2 .ct-series-a .ct-area {\n  fill-opacity: 1;\n  fill: url(\"/dashboard/eCommerce#wGradient2\") !important; }\n\n:host /deep/ .WidgetAreaChart2 .ct-series-a .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetAreaChart2 .ct-series-a .ct-point-circle {\n  fill: #fff;\n  stroke-width: 10;\n  stroke: #fa5b4c; }\n\n:host /deep/ .WidgetAreaChart2 .ct-series-a .ct-point-circle-transperent {\n  fill: transparent; }\n\n:host /deep/ .WidgetAreaChart2 .ct-target-line {\n  stroke: #fff;\n  stroke-width: 2px;\n  stroke-dasharray: 4px; }\n\n:host /deep/ .WidgetAreaChart3 .ct-series-a .ct-area {\n  fill-opacity: 1;\n  fill: url(\"/dashboard/eCommerce#wGradient3\") !important; }\n\n:host /deep/ .WidgetAreaChart3 .ct-series-a .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetAreaChart3 .ct-series-a .ct-point-circle {\n  fill: #fff;\n  stroke-width: 10;\n  stroke: #19667d; }\n\n:host /deep/ .WidgetAreaChart3 .ct-series-a .ct-point-circle-transperent {\n  fill: transparent; }\n\n:host /deep/ .WidgetAreaChart3 .ct-target-line {\n  stroke: #fff;\n  stroke-width: 2px;\n  stroke-dasharray: 4px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2VDb21tZXJjZS9DOlxcVXNlcnNcXE1SVDIwXFxEZXNrdG9wXFxVTVxcdXNlcm1hbmFnZW1lbnQvc3JjXFxhcHBcXGRhc2hib2FyZFxcZUNvbW1lcmNlXFxlQ29tbWVyY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxzQkFBcUI7RUFDckIsMkJBQTBCLEVBQzdCOztBQUVEO0VBQ0ksa0JBQWlCLEVBQ3BCOztBQUlEO0VBQTBELHVEQUEyRDtFQUFFLGtCQUFpQixFQUFJOztBQUM1STtFQUEwRCxxREFBd0Q7RUFBQyxnQkFBYztFQUFDLGFBQVcsRUFBRzs7QUFDaEo7RUFBc0Usa0JBQWdCO0VBQUMsZ0JBQWMsRUFBRTs7QUFDdkc7RUFDSSw2REFBMkQ7RUFDbkQscURBQW1EO0VBQUU7aUZBQ2dCLEVBQ2hGOztBQUtEO0VBR1ksc0RBQTJELEVBQzlEOztBQUpUO0VBTVksb0RBQXlELEVBQzVEOztBQVdQO0VBQ0UsaURBQXNELEVBRXZEOztBQUNEO0VBQ0UsaURBQXNELEVBRXZEOztBQUNEO0VBQ0UsaURBQXNELEVBRXZEOztBQUdEO0VBQ0Usb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUMxQixnQkFBZTtFQUNmLGNBQWEsRUFDZDs7QUFFRDtFQUNFLGFBQVk7RUFDWixrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSw2REFBMkQ7RUFDM0QscURBQW1EO0VBQUU7eUVBQ2dCLEVBQ3RFOztBQU1EOztFQUVFLDhDQUFtRDtFQUNuRCw0Q0FBaUQsRUFDbEQ7O0FBQ0Q7O0VBRUUsOENBQW1EO0VBQ25ELDRDQUFpRCxFQUNsRDs7QUFDRDs7RUFFRSw4Q0FBbUQ7RUFDbkQsNENBQWlELEVBQ2xEOztBQUNEOztFQUVFLDhDQUFtRDtFQUNuRCw0Q0FBaUQsRUFDbEQ7O0FBQ0Q7O0VBRUUsOENBQW1EO0VBQ25ELDRDQUFpRCxFQUNsRDs7QUFHRDtFQUNFLDZEQUEyRDtFQUNuRCxxREFBbUQ7RUFBRTtpRkFDZ0IsRUFDaEY7O0FBT0Q7RUFDSSxnQkFBZTtFQUNmLHdEQUE0RCxFQUMvRDs7QUFFRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFHRDtFQUNJLFdBQVM7RUFBQyxpQkFBZTtFQUFDLGdCQUFlLEVBQzNDOztBQUVEO0VBQ0csa0JBQWlCLEVBQ25COztBQUVEO0VBQ0csYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixzQkFBcUIsRUFDdEI7O0FBT0g7RUFDSSxnQkFBZTtFQUNmLHdEQUE0RCxFQUMvRDs7QUFFRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFHRDtFQUNJLFdBQVM7RUFBQyxpQkFBZTtFQUFDLGdCQUFlLEVBQzNDOztBQUVEO0VBQ0csa0JBQWlCLEVBQ25COztBQUVEO0VBQ0csYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixzQkFBcUIsRUFDdEI7O0FBT0g7RUFDSSxnQkFBZTtFQUNmLHdEQUE0RCxFQUMvRDs7QUFFRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFHRDtFQUNJLFdBQVM7RUFBQyxpQkFBZTtFQUFDLGdCQUFlLEVBQzNDOztBQUVEO0VBQ0csa0JBQWlCLEVBQ25COztBQUVEO0VBQ0csYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixzQkFBcUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZUNvbW1lcmNlL2VDb21tZXJjZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9zY3NzL2dyYWRpZW50LXZhcmlhYmxlc1wiO1xyXG5cclxuOmhvc3QgL2RlZXAvIC5jdC1ncmlke1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMHB4O1xyXG4gICAgc3Ryb2tlOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuY3QtbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLy8gTGluZSBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3Qtc2VyaWVzLmN0LXNlcmllcy1hIC5jdC1saW5lIHsgc3Ryb2tlOiB1cmwoJGVDb21tZXJjZS1ncmFkaWVudC1wYXRoICsgI2xpbmVhcjEpICFpbXBvcnRhbnQ7IHN0cm9rZS13aWR0aDogNXB4OyB9XHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1zZXJpZXMuY3Qtc2VyaWVzLWEgLmN0LWNpcmNsZXtmaWxsOnVybCgkZUNvbW1lcmNlLWdyYWRpZW50LXBhdGggKyAjbGluZWFyMSkgIWltcG9ydGFudDtzdHJva2Utd2lkdGg6NTtzdHJva2U6I2ZmZjt9XHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1zZXJpZXMuY3Qtc2VyaWVzLWEgLmN0LWNpcmNsZS10cmFuc3BlcmVudHtmaWxsOnRyYW5zcGFyZW50O3N0cm9rZS13aWR0aDowfVxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydFNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyMHB4IDZweCByZ2JhKDAsMCwwLDAuMykgKTtcclxuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDIwcHggNnB4IHJnYmEoMCwwLDAsMC4zKSApOyAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcbi8vIExpbmUgQ2hhcnQgQ1NTIEVuZHNcclxuXHJcbi8vIFN0YWNrIEJhciBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLlN0YWNrYmFyY2hhcnR7XHJcbiAgICAuY3Qtc2VyaWVzLWEge1xyXG4gICAgICAgIC5jdC1iYXJ7XHJcbiAgICAgICAgICAgIHN0cm9rZTogdXJsKCRlQ29tbWVyY2UtZ3JhZGllbnQtcGF0aCArICAjbGluZWFyKSAhaW1wb3J0YW50XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAuY3Qtc2xpY2UtYmFye1xyXG4gICAgICAgICAgICBmaWxsOiB1cmwoJGVDb21tZXJjZS1ncmFkaWVudC1wYXRoICsgICNsaW5lYXIpICFpbXBvcnRhbnRcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG5cclxuLy8gU3RhY2sgQmFyIENoYXJ0IENTUyBFbmRzXHJcblxyXG5cclxuXHJcbiBcclxuICAvLyBEb251dCBDaGFydCAgQ1NTIEVuZHNcclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1kb25lIC5jdC1zbGljZS1kb251dC1zb2xpZCB7XHJcbiAgICBmaWxsOiB1cmwoJGVDb21tZXJjZS1ncmFkaWVudC1wYXRoICsgICNkb251dEdyYWRpZW50MSk7XHJcbiAgICAvLyBzdHJva2Utd2lkdGg6IDI4cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5kb251dCAuY3QtcHJvZ3Jlc3MgLmN0LXNsaWNlLWRvbnV0LXNvbGlkIHtcclxuICAgIGZpbGw6IHVybCgkZUNvbW1lcmNlLWdyYWRpZW50LXBhdGggKyAgI2RvbnV0R3JhZGllbnQyKTtcclxuICAgIC8vIHN0cm9rZS13aWR0aDogMjRweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1vdXRzdGFuZGluZyAuY3Qtc2xpY2UtZG9udXQtc29saWQge1xyXG4gICAgZmlsbDogdXJsKCRlQ29tbWVyY2UtZ3JhZGllbnQtcGF0aCArICAjZG9udXRHcmFkaWVudDMpO1xyXG4gICAgLy8gc3Ryb2tlLXdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG5cclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1sYWJlbCB7XHJcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xyXG4gICAgYWxpZ25tZW50LWJhc2VsaW5lOiBtaWRkbGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmaWxsOiAjODY4ZTk2O1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5kb251dCAuY3QtY2hhcnQtZG9udXQgLmN0LXNlcmllcyB7XHJcbiAgICBzdHJva2U6ICNmZmY7XHJcbiAgICBzdHJva2Utd2lkdGg6IDNweDtcclxuICB9XHJcblxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXRTaGFkb3d7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyMHB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyMHB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTsgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXHJcbiAgfVxyXG5cclxuICAvLyBEb251dCBDaGFydCAgQ1NTIEVuZHNcclxuXHJcbiAgLy8gQmFyIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg1bisxKSxcclxuICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3Qtc2xpY2UtYmFyOm50aC1vZi10eXBlKDVuKzEpIHtcclxuICAgIHN0cm9rZTogdXJsKCRlQ29tbWVyY2UtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ3KTtcclxuICAgIGZpbGw6IHVybCgkZUNvbW1lcmNlLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50Nyk7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNW4rMikgLCBcclxuICAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LXNsaWNlLWJhcjpudGgtb2YtdHlwZSg1bisyKSB7XHJcbiAgICBzdHJva2U6IHVybCgkZUNvbW1lcmNlLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50NSk7XHJcbiAgICBmaWxsOiB1cmwoJGVDb21tZXJjZS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDUpO1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDVuKzMpLCAgXHJcbiAgIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1zbGljZS1iYXI6bnRoLW9mLXR5cGUoNW4rMykge1xyXG4gICAgc3Ryb2tlOiB1cmwoJGVDb21tZXJjZS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDYpO1xyXG4gICAgZmlsbDogdXJsKCRlQ29tbWVyY2UtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ2KTtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg1bis0KSwgIFxyXG4gICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3Qtc2xpY2UtYmFyOm50aC1vZi10eXBlKDVuKzQpIHtcclxuICAgIHN0cm9rZTogdXJsKCRlQ29tbWVyY2UtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ0KTtcclxuICAgIGZpbGw6IHVybCgkZUNvbW1lcmNlLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50NCk7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNW4rNSksICBcclxuICAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LXNsaWNlLWJhcjpudGgtb2YtdHlwZSg1bis1KSB7XHJcbiAgICBzdHJva2U6IHVybCgkZUNvbW1lcmNlLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50OCk7XHJcbiAgICBmaWxsOiB1cmwoJGVDb21tZXJjZS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDgpO1xyXG4gIH1cclxuXHJcblxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnRTaGFkb3cge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjBweCA4cHggcmdiYSgwLDAsMCwwLjMpICk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyMHB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTsgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cclxufVxyXG5cclxuLy8gQmFyIENoYXJ0IENTUyBFbmRzXHJcblxyXG5cclxuLy8gV2lkZ2V0IGFyZWEgMSBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLldpZGdldEFyZWFDaGFydDEgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcclxuICAgIGZpbGwtb3BhY2l0eTogMTtcclxuICAgIGZpbGw6dXJsKCRlQ29tbWVyY2UtZ3JhZGllbnQtcGF0aCArICAjd0dyYWRpZW50MSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5XaWRnZXRBcmVhQ2hhcnQxIC5jdC1zZXJpZXMtYSAuY3QtbGluZXtcclxuICAgIHN0cm9rZS13aWR0aDogMHB4O1xyXG59XHJcblxyXG5cclxuOmhvc3QgL2RlZXAvIC5XaWRnZXRBcmVhQ2hhcnQxIC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlIHsgICAgIFxyXG4gICAgZmlsbDojZmZmO3N0cm9rZS13aWR0aDoxMDtzdHJva2U6ICM4MjQ5ZTg7XHJcbiB9XHJcbiBcclxuIDpob3N0IC9kZWVwLyAuV2lkZ2V0QXJlYUNoYXJ0MSAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZS10cmFuc3BlcmVudCB7ICAgICBcclxuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xyXG4gfVxyXG5cclxuIDpob3N0IC9kZWVwLyAuV2lkZ2V0QXJlYUNoYXJ0MSAuY3QtdGFyZ2V0LWxpbmUge1xyXG4gICAgc3Ryb2tlOiAjZmZmO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiA0cHg7XHJcbiAgfVxyXG5cclxuXHJcbi8vIFdpZGdldCBhcmVhIDEgQ2hhcnQgQ1NTIEVuZHNcclxuXHJcbi8vIFdpZGdldCBhcmVhIDIgQ2hhcnQgQ1NTIFN0YXJ0c1xyXG5cclxuOmhvc3QgL2RlZXAvIC5XaWRnZXRBcmVhQ2hhcnQyIC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XHJcbiAgICBmaWxsLW9wYWNpdHk6IDE7XHJcbiAgICBmaWxsOnVybCgkZUNvbW1lcmNlLWdyYWRpZW50LXBhdGggKyAgI3dHcmFkaWVudDIpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0QXJlYUNoYXJ0MiAuY3Qtc2VyaWVzLWEgLmN0LWxpbmV7XHJcbiAgICBzdHJva2Utd2lkdGg6IDBweDtcclxufVxyXG5cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0QXJlYUNoYXJ0MiAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7ICAgICBcclxuICAgIGZpbGw6I2ZmZjtzdHJva2Utd2lkdGg6MTA7c3Ryb2tlOiAjZmE1YjRjO1xyXG4gfVxyXG4gXHJcbiA6aG9zdCAvZGVlcC8gLldpZGdldEFyZWFDaGFydDIgLmN0LXNlcmllcy1hIC5jdC1wb2ludC1jaXJjbGUtdHJhbnNwZXJlbnQgeyAgICAgXHJcbiAgICBmaWxsOiB0cmFuc3BhcmVudDtcclxuIH1cclxuXHJcbiA6aG9zdCAvZGVlcC8gLldpZGdldEFyZWFDaGFydDIgLmN0LXRhcmdldC1saW5lIHtcclxuICAgIHN0cm9rZTogI2ZmZjtcclxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogNHB4O1xyXG4gIH1cclxuXHJcblxyXG4vLyBXaWRnZXQgYXJlYSAyIENoYXJ0IENTUyBFbmRzXHJcblxyXG4vLyBXaWRnZXQgYXJlYSAzIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0QXJlYUNoYXJ0MyAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEge1xyXG4gICAgZmlsbC1vcGFjaXR5OiAxO1xyXG4gICAgZmlsbDp1cmwoJGVDb21tZXJjZS1ncmFkaWVudC1wYXRoICsgICN3R3JhZGllbnQzKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLldpZGdldEFyZWFDaGFydDMgLmN0LXNlcmllcy1hIC5jdC1saW5le1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuXHJcblxyXG46aG9zdCAvZGVlcC8gLldpZGdldEFyZWFDaGFydDMgLmN0LXNlcmllcy1hIC5jdC1wb2ludC1jaXJjbGUgeyAgICAgXHJcbiAgICBmaWxsOiNmZmY7c3Ryb2tlLXdpZHRoOjEwO3N0cm9rZTogIzE5NjY3ZDtcclxuIH1cclxuIFxyXG4gOmhvc3QgL2RlZXAvIC5XaWRnZXRBcmVhQ2hhcnQzIC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlLXRyYW5zcGVyZW50IHsgICAgIFxyXG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XHJcbiB9XHJcblxyXG4gOmhvc3QgL2RlZXAvIC5XaWRnZXRBcmVhQ2hhcnQzIC5jdC10YXJnZXQtbGluZSB7XHJcbiAgICBzdHJva2U6ICNmZmY7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDRweDtcclxuICB9XHJcblxyXG5cclxuLy8gV2lkZ2V0IGFyZWEgMyBDaGFydCBDU1MgRW5kc1xyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/eCommerce/eCommerce.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/eCommerce/eCommerce.component.ts ***!
  \************************************************************/
/*! exports provided: EcommerceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceComponent", function() { return EcommerceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var data = __webpack_require__(/*! ../../shared/data/chartist.json */ "./src/app/shared/data/chartist.json");
var EcommerceComponent = /** @class */ (function () {
    function EcommerceComponent() {
        // Line Chart Starts
        this.lineChart = {
            type: 'Line',
            data: data['line'],
            options: {
                low: 0,
                fullWidth: true,
                onlyInteger: true,
                chartPadding: {
                    right: 20
                },
                axisY: {
                    low: 0,
                    scaleMinSpace: 60,
                    labelInterpolationFnc: function labelInterpolationFnc(value) {
                        return value / 1000 + 'K';
                    },
                },
                axisX: {
                    showGrid: false
                },
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_1__["Interpolation"].simple({
                    divisor: 2
                }),
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'linear1',
                        x1: 1,
                        y1: 0,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(185,168,231, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(118,74,233, 1)'
                    });
                },
                draw: function (data) {
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: [10],
                            class: data.value.y === 0 || data.value.y === 6800 ? 'ct-circle-transperent' : 'ct-circle'
                        });
                        data.element.replace(circle);
                    }
                }
            },
        };
        // Line Chart Ends
        // Stacked Bar chart configuration Starts
        this.Stackbarchart = {
            type: 'Bar',
            data: data['Stackbarchart'],
            options: {
                fullWidth: true,
                axisX: {
                    showGrid: false,
                },
                axisY: {
                    showGrid: true,
                    showLabel: false,
                    offset: 0
                },
                chartPadding: 30
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'linear',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(0, 201, 255,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(17,228,183, 1)'
                    });
                },
                draw: function (data) {
                    if (data.type === 'bar') {
                        data.element.attr({
                            style: 'stroke-width: 5px',
                            x1: data.x1 + 0.001
                        });
                        data.group.append(new chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"]('circle', {
                            cx: data.x2,
                            cy: data.y2,
                            r: 5
                        }, 'ct-slice-bar'));
                    }
                    else if (data.type === 'label') {
                        data.element.attr({
                            y: 270
                        });
                    }
                }
            },
        };
        // Stacked Bar chart configuration Ends
        // Donut chart configuration Starts
        this.DonutChart = {
            type: 'Pie',
            data: data['donutDashboard'],
            options: {
                donut: true,
                startAngle: 310,
                donutSolid: true,
                donutWidth: 30,
                labelInterpolationFnc: function (value) {
                    var total = data['donutDashboard'].series.reduce(function (prev, series) {
                        return prev + series.value;
                    }, 0);
                    return total + '%';
                }
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'donutGradient1',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(155, 60, 183,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(255, 57, 111, 1)'
                    });
                    defs.elem('linearGradient', {
                        id: 'donutGradient2',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(0, 75, 145,0.8)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(120, 204, 55, 0.8)'
                    });
                    defs.elem('linearGradient', {
                        id: 'donutGradient3',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(132, 60, 247,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(56, 184, 242, 1)'
                    });
                },
                draw: function (data) {
                    if (data.type === 'label') {
                        if (data.index === 0) {
                            data.element.attr({
                                dx: data.element.root().width() / 2,
                                dy: data.element.root().height() / 2
                            });
                        }
                        else {
                            data.element.remove();
                        }
                    }
                }
            }
        };
        // Donut chart configuration Ends
        //  Bar chart configuration Starts
        this.BarChart = {
            type: 'Bar', data: data['DashboardBar'], options: {
                axisX: {
                    showGrid: false,
                },
                axisY: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0
                },
                low: 0,
                high: 60,
            },
            responsiveOptions: [
                ['screen and (max-width: 640px)', {
                        seriesBarDistance: 5,
                        axisX: {
                            labelInterpolationFnc: function (value) {
                                return value[0];
                            }
                        }
                    }]
            ],
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'gradient4',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(238, 9, 121,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(255, 106, 0, 1)'
                    });
                    defs.elem('linearGradient', {
                        id: 'gradient5',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(0, 75, 145,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(120, 204, 55, 1)'
                    });
                    defs.elem('linearGradient', {
                        id: 'gradient6',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(132, 60, 247,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(56, 184, 242, 1)'
                    });
                    defs.elem('linearGradient', {
                        id: 'gradient7',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(155, 60, 183,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(255, 57, 111, 1)'
                    });
                    defs.elem('linearGradient', {
                        id: 'gradient8',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(0, 201, 255,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(17,228,183, 1)'
                    });
                },
                draw: function (data) {
                    var barHorizontalCenter, barVerticalCenter, label, value;
                    if (data.type === 'bar') {
                        data.element.attr({
                            y1: 195,
                            x1: data.x1 + 0.001
                        });
                        data.group.append(new chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"]('circle', {
                            cx: data.x2,
                            cy: data.y2,
                            r: 12
                        }, 'ct-slice-bar'));
                    }
                }
            },
        };
        // Bar chart configuration Ends
        // Widget Area chart 1 configuration Starts
        this.WidgetAreaChart1 = {
            type: 'Line', data: data['WidgetAreaChart'],
            options: {
                axisX: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0,
                },
                axisY: {
                    showGrid: false,
                    low: 0,
                    showLabel: false,
                    offset: 0,
                    scaleMinSpace: 10,
                },
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_1__["Interpolation"].simple({
                    divisor: 2
                }),
                fullWidth: true,
                showArea: true,
                onlyInteger: true,
                targetLine: {
                    value: 30,
                    class: 'ct-target-line'
                }
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'wGradient1',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(130,73,232, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(41,123,249, 1)'
                    });
                    var targetLineX = data.chartRect.x1 + (data.chartRect.width() - (data.chartRect.width() / data.bounds.step));
                    data.svg.elem('line', {
                        x1: targetLineX,
                        x2: targetLineX,
                        y1: data.chartRect.y1,
                        y2: data.chartRect.y2
                    }, data.options.targetLine.class);
                },
                draw: function (data) {
                    var circleRadius = 10;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: data.value.y === 30 ? 'ct-point-circle' : 'ct-point-circle-transperent'
                        });
                        data.element.replace(circle);
                    }
                }
            },
        };
        // Widget Area chart 1 configuration Ends
        // Widget Area chart 2 configuration Starts
        this.WidgetAreaChart2 = {
            type: 'Line', data: data['WidgetAreaChart'],
            options: {
                axisX: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0,
                },
                axisY: {
                    showGrid: false,
                    low: 0,
                    showLabel: false,
                    offset: 0,
                    scaleMinSpace: 10,
                },
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_1__["Interpolation"].simple({
                    divisor: 2
                }),
                fullWidth: true,
                showArea: true,
                onlyInteger: true,
                targetLine: {
                    value: 30,
                    class: 'ct-target-line'
                }
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'wGradient2',
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(252,157,48, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(250,91,76, 1)'
                    });
                    var targetLineX = data.chartRect.x1 + (data.chartRect.width() - (data.chartRect.width() / data.bounds.step));
                    data.svg.elem('line', {
                        x1: targetLineX,
                        x2: targetLineX,
                        y1: data.chartRect.y1,
                        y2: data.chartRect.y2
                    }, data.options.targetLine.class);
                },
                draw: function (data) {
                    var circleRadius = 10;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: data.value.y === 30 ? 'ct-point-circle' : 'ct-point-circle-transperent'
                        });
                        data.element.replace(circle);
                    }
                }
            },
        };
        // Widget Area chart 2 configuration Ends
        // Widget Area chart 3 configuration Starts
        this.WidgetAreaChart3 = {
            type: 'Line', data: data['WidgetAreaChart'],
            options: {
                axisX: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0,
                },
                axisY: {
                    showGrid: false,
                    low: 0,
                    showLabel: false,
                    offset: 0,
                    scaleMinSpace: 10,
                },
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_1__["Interpolation"].simple({
                    divisor: 2
                }),
                fullWidth: true,
                showArea: true,
                onlyInteger: true,
                targetLine: {
                    value: 30,
                    class: 'ct-target-line'
                }
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'wGradient3',
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(120, 204, 55, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(0, 75, 145, 1)'
                    });
                    var targetLineX = data.chartRect.x1 + (data.chartRect.width() - (data.chartRect.width() / data.bounds.step));
                    data.svg.elem('line', {
                        x1: targetLineX,
                        x2: targetLineX,
                        y1: data.chartRect.y1,
                        y2: data.chartRect.y2
                    }, data.options.targetLine.class);
                },
                draw: function (data) {
                    var circleRadius = 10;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: data.value.y === 30 ? 'ct-point-circle' : 'ct-point-circle-transperent'
                        });
                        data.element.replace(circle);
                    }
                }
            },
        };
        // Widget Area chart 3 configuration Ends
    }
    EcommerceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-eCommerce',
            template: __webpack_require__(/*! ./eCommerce.component.html */ "./src/app/dashboard/eCommerce/eCommerce.component.html"),
            styles: [__webpack_require__(/*! ./eCommerce.component.scss */ "./src/app/dashboard/eCommerce/eCommerce.component.scss")]
        })
    ], EcommerceComponent);
    return EcommerceComponent;
}());



/***/ }),

/***/ "./src/app/shared/data/chartist.json":
/*!*******************************************!*\
  !*** ./src/app/shared/data/chartist.json ***!
  \*******************************************/
/*! exports provided: Bar, Line3, ScatterLine, Scatter, lineArea4, lineArea5, lineArea6, lineArea3, lineArea2, lineAreaDashboard, twoLinesArea, lineArea, lineArea1, Bi-PolarLine, DistributedSeries, donut, donutDashboard, DashboardDonut, LineDashboard, line2, line, line1, line4, WidgetlineChart, WidgetlineChart2, WidgetlineChart3, WidgetAreaChart, WidgetAreaChart2, DashboardBar, Stackbarchart, default */
/***/ (function(module) {

module.exports = {"Bar":{"labels":["Jan","Feb","Mar","Apr"],"series":[[5,4,3,7],[3,2,9,5]]},"Line3":{"labels":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],"series":[[12,9,7,4,5,6,6],[2,1,10,7,3,7,2],[1,10,2,10,6,2,8]]},"ScatterLine":{"labels":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],"series":[[5,5,10,8,7,5,4,null,null,null,10,10,7,8,6,9],[10,15,null,12,null,10,12,15,null,null,12,null,14,null,null,null],[null,null,null,null,3,4,1,3,4,6,7,9,5,null,null,null]]},"Scatter":{"labels":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],"series":[[53.761530227932376,55.06077543488965,90.15619763154757,37.945743703232026,90.15064659594809,72.37213982905773,29.242023161826005,10.613377393892765,41.13272180459888,66.89170357483623,85.47173517613665,80.61313435041848,33.86466777842112,6.993834151672074,58.93321826442517,84.4944785171936,66.47863439014286,26.61792342884319,64.7715312645164,66.7721238997995,24.81459377695263,82.09485043326285,94.28939258245515,81.16315118589196,26.285515136087987,94.25034710171474,82.86738500874603,42.275860431799764,7.252221593822195,12.509815755028853,57.592396396889086,16.98227807583916,82.13296667627357,20.7798608815297,1.4886093931434141,27.717128889831557,83.02006467579533,46.825802760236044,4.449951322677559,63.949111152579285,76.2705142938321,92.84217568625859,33.34033701723147,83.32421059421287,30.95015406095809,99.26555827017742,64.73104862164556,58.3205528852039,98.07205383638176,34.217237701943006,76.84029415694194,77.51086205882534],[68.01743447487219,33.569040390627556,55.83518094287856,6.424873491809824,40.24108430485855,12.867529962712322,33.9171424717146,66.13486382709537,75.36042883674916,37.18758127466557,46.080488500245266,40.98286341759507,25.372664387026923,40.063178151024424,73.6495194240123,48.56310577188692,22.903651846539972,91.5635618730181,84.08459591966795,49.153284675642595,34.82239557500657,38.7753190443602,77.57931404198679,78.24594487949813,42.96149738863182,68.87344162290039,73.35891706187205,79.20638493178991,39.862955442611494,67.72254472880542,32.5667298714178,67.8951691474951,68.22845079029227,24.013142038835245,84.77387385278308,81.96540495436318,21.938120212431865,20.591735159801374,44.392082366517926,99.42917256114683,75.80197000496361,44.95928290576234,56.30251437622547,81.39575345403685,46.6480941362678,60.30444929651577,63.904344644822956,96.31525902388087,80.79036620032171,67.94970208668927,81.84914397158013,64.34930133297705],[94.83796449464408,0.05012881656139001,78.03842883107683,86.85066315022306,63.09834842166116,23.82558487142836,95.04013234951407,91.84355248378253,12.28927042529946,91.59027939302398,44.15426456286402,38.40309269293461,3.0323072732378,51.442756807992104,51.067878308530304,68.87925798432126,9.786004373688861,93.42472024399827,7.196590706996409,90.61672585107475,82.64800742042794,29.33983554466535,27.575295787547738,63.76900610636933,44.31691167371892,35.02049600051234,77.91406665575869,9.594366007019817,33.17507518940415,45.94854823450043,6.028395302814493,97.36303808493578,20.735238575670635,11.577295085428618,49.377810037702986,7.984978938697163,81.52380171386066,86.62152122764415,46.81516933597669,72.70055546352265,39.482785893198404,2.1729768023229346,32.730007414228865,11.8384494034782,97.04367174876609,37.87839695714026,96.1605067491887,24.340714355822968,90.92986653306863,1.9182109464024322,36.43773292877359,51.562138311337314],[90.93023971442824,91.24607758668748,83.11135627737995,38.89630350329263,47.48702934796674,83.10718371512166,93.40725921590878,62.65211828434698,76.93458061916239,94.13663459332706,15.47636651231441,93.70144628274673,80.7911280644665,32.06886936152644,6.458421962605865,14.668285135928372,10.700783089925082,46.997088144127886,53.02589740808132,15.662154340561152,94.70275097718405,59.27632659816442,53.88591373783527,21.602789791233846,29.326094253488066,8.159091366607441,52.57892041859127,71.68439221439431,61.773032787481455,43.02319475997418,97.7745443722398,41.77024219267196,32.79576671635134,26.614574588124352,96.60428591791621,68.90454201273897,33.39711159158707,94.56531035270376,83.77269890317353,72.91107164394433,50.31188574983041,54.67801129631369,69.65510719649639,59.96153020907791,50.66882388014429,97.73196339743835,12.936677564924759,30.197501751145396,7.071721221094629,60.85688790258899,51.276925828485446,30.951614223635193]]},"lineArea4":{"labels":[1,2,3,4,5,6,7,8],"series":[[5,9,7,8,5,3,5,4]]},"lineArea5":{"labels":[1,2,3],"series":[[30,80,35]]},"lineArea6":{"labels":[1,2,3,4,5,6,7],"series":[[10,6,15,13,20,17,19]]},"lineArea3":{"labels":[1,2,3,4,5,6,7,8],"series":[[0,5,15,8,15,9,30,0],[0,3,5,2,8,1,5,0]]},"lineArea2":{"labels":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"series":[[5,30,25,55,45,65,60,105,80,110,120,150],[80,95,87,155,140,147,130,180,160,175,165,200]]},"lineAreaDashboard":{"labels":[1,2,3,4,5,6,7,8],"series":[[0,20,10,45,20,36,21,0],[0,5,22,14,32,12,28,0]]},"twoLinesArea":{"labels":[1,2,3,4,5,6,7,8,9,10],"series":[[5,9,7,8,5,3,5,4,9,23],[10,14,12,13,10,8,10,9,14,28]]},"lineArea":{"labels":[1,2,3,4,5,6,7,8,9,10],"series":[[5,9,7,8,5,3,5,4,9,23]]},"lineArea1":{"labels":[1,2,3,4,5,6,7,8,9,10],"series":[[10,30,10,35,15,45,15,35,20,30],[0,10,30,10,30,15,30,15,30,0]]},"Bi-PolarLine":{"labels":[1,2,3,4,5,6,7,8],"series":[[1,2,3,1,-2,0,1,0],[-2,-1,-2,-1,-2.5,-1,-2,-1],[0,0,0,1,2,2.5,2,1],[2.5,2,1,0.5,1,0.5,-1,-2.5]]},"DistributedSeries":{"labels":["XS","S","M","L","XL","XXL","XXXL"],"series":[50,70,120,200,180,120,150]},"donut":{"series":[20,10,30,40]},"donutDashboard":{"series":[{"name":"done","className":"ct-done","value":35},{"name":"progress","className":"ct-progress","value":14},{"name":"outstanding","className":"ct-outstanding","value":23}]},"DashboardDonut":{"series":[{"name":"done","className":"ct-done","value":10},{"name":"outstanding","className":"ct-outstanding","value":3}]},"LineDashboard":{"labels":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],"series":[[80,85,75,65,63,70,82]]},"line2":{"labels":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"series":[[160,150,140,120,75,35,45,65,100,145,160,180],[100,95,90,100,110,120,130,140,130,95,75,80]]},"line":{"labels":["1st","2nd","3rd","4th","5th","6th","7th","8th"],"series":[[0,4500,2600,6100,2600,6500,3200,6800]]},"line1":{"labels":["Jan","Feb","Mar","Apr","May","Jun"],"series":[[65,105,145,105,145,185],[125,80,30,70,110,150],[175,190,160,190,140,100]]},"line4":{"labels":[1,2,3,4],"series":[[750,1250,1100,1800]]},"WidgetlineChart":{"labels":["1","2","3","4","5","6","7","8","9","10","11","12","13"],"series":[[50,45,60,55,70,55,60,55,65,57,60,53,53]]},"WidgetlineChart2":{"labels":["Jan","Feb","Mar","Apr","May","June","July","Aug"],"series":[[55,60,50,55,50,60,55,57]]},"WidgetlineChart3":{"labels":["Jan","Feb","Mar","Apr","May"],"series":[[50,70,45,75,85]]},"WidgetAreaChart":{"labels":[1,2,3,4,5,6],"series":[[0,13,6,30,18,28]]},"WidgetAreaChart2":{"labels":[1,2,3,4,5,6],"series":[[3,20,17,35,32,45]]},"DashboardBar":{"labels":["Sport","Music","Travel","News","Blog"],"series":[[35,20,30,45,55]]},"Stackbarchart":{"labels":["J","F","M","A","M","J","J","A","S","O","N","D"],"series":[[7,4,2,-2,-4,-7,-7,-4,-2,2,4,7]]}};

/***/ }),

/***/ "./src/app/shared/directives/match-height.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/match-height.directive.ts ***!
  \*************************************************************/
/*! exports provided: MatchHeightDirective, MatchHeightModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeightDirective", function() { return MatchHeightDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeightModule", function() { return MatchHeightModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MatchHeightDirective = /** @class */ (function () {
    function MatchHeightDirective(el) {
        this.el = el;
    }
    MatchHeightDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        // call our matchHeight function here
        setTimeout(function () { _this.matchHeights(_this.el.nativeElement, _this.matchHeight); }, 300);
    };
    MatchHeightDirective.prototype.matchHeights = function (parent, className) {
        // match height logic here
        if (!parent)
            return;
        // step 1: find all the child elements with the selected class name
        var children = parent.getElementsByClassName(className);
        if (!children)
            return;
        //PIXINVENT - Match hight - fix --- comment below code
        Array.from(children).forEach(function (x) {
            x.style.height = 'initial';
        });
        // step 2a: get all the child elements heights
        var itemHeights = Array.from(children)
            .map(function (x) { return x.getBoundingClientRect().height; });
        // step 2b: find out the tallest
        var maxHeight = itemHeights.reduce(function (prev, curr) {
            return curr > prev ? curr : prev;
        }, 0);
        // step 3: update all the child elements to the tallest height
        Array.from(children)
            .forEach(function (x) { return x.style.height = maxHeight + "px"; });
    };
    MatchHeightDirective.prototype.onResize = function () {
        // call our matchHeight function here
        this.matchHeights(this.el.nativeElement, this.matchHeight);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MatchHeightDirective.prototype, "matchHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatchHeightDirective.prototype, "onResize", null);
    MatchHeightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[matchHeight]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], MatchHeightDirective);
    return MatchHeightDirective;
}());

var MatchHeightModule = /** @class */ (function () {
    function MatchHeightModule() {
    }
    MatchHeightModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [MatchHeightDirective],
            exports: [MatchHeightDirective]
        })
    ], MatchHeightModule);
    return MatchHeightModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map