var router = require("express").Router();
var sanitize = require("mongo-sanitize");

router.get("/", function (req, res) {
	res.send({});
});

// Sanitize the request before passing it to the actual endpoints
function sanitizeBody(req, res, next) {
	req.body = sanitize(req.body);
	next();
}
var questionHandlers = require("./route_handlers/question_handler.js");

// question routes
router.route("/questions")
	.get(sanitizeBody, questionHandlers.queryAll);

router.route("/question")
	.post(sanitizeBody, questionHandlers.create)

router.route("/question/:id")
	.get(sanitizeBody, questionHandlers.query)
	.put(sanitizeBody, questionHandlers.update)
	.delete(sanitizeBody, questionHandlers.delete);

/*
var userHandlers = require("./route_handlers/user.js");
var userAchievementHandlers = require("./route_handlers/user_achievement.js");
var userGroupHandlers = require("./route_handlers/user_group.js");
var achievementHandlers = require("./route_handlers/achievement.js");
var achievementContainerHandlers = require("./route_handlers/achievement_container.js");
var achievementRuleHandlers = require("./route_handlers/achievement_rule.js");

// User routes
router.route("/users")
.get(sanitizeBody, userHandlers.queryAll)
.post(sanitizeBody, userHandlers.create);

router.route("/users/:id")
.get(sanitizeBody, userHandlers.query)
.put(sanitizeBody, userHandlers.update)
.delete(sanitizeBody, userHandlers.delete);

// User achievement routes
router.route("/user-achievements")
.get(sanitizeBody, userAchievementHandlers.queryAll)
.post(sanitizeBody, userAchievementHandlers.create);

router.route("/user-achievements/:id")
.get(sanitizeBody, userAchievementHandlers.query)
.put(sanitizeBody, userAchievementHandlers.update)
.delete(sanitizeBody, userAchievementHandlers.delete);

//router.route("/users/:user_id/containers/:container_id")
//.get(sanitizeBody, achievementContainerHandlers.queryUserContainer)

// UserGroup routes
router.route("/groups")
.get(sanitizeBody, userGroupHandlers.queryAll)
.post(sanitizeBody, userGroupHandlers.create);

router.route("/groups/:id")
.get(sanitizeBody, userGroupHandlers.query)
.put(sanitizeBody, userGroupHandlers.update)
.delete(sanitizeBody, userGroupHandlers.delete);

// Achievement routes
router.route("/achievements")
.get(sanitizeBody, achievementHandlers.queryAll)
.post(sanitizeBody, achievementHandlers.create);

router.route("/achievements/describe")
.get(sanitizeBody, achievementHandlers.describe)

router.route("/achievements/:id")
.get(sanitizeBody, achievementHandlers.query)
.put(sanitizeBody, achievementHandlers.update)
.delete(sanitizeBody, achievementHandlers.delete);

// Achievement rule routes
router.route("/achievement-rules")
.get(sanitizeBody, achievementRuleHandlers.queryAll)
.post(sanitizeBody, achievementRuleHandlers.create);

router.route("/achievement-rules/:id")
.get(sanitizeBody, achievementRuleHandlers.query)
.put(sanitizeBody, achievementRuleHandlers.update)
.delete(sanitizeBody, achievementRuleHandlers.delete);

// AchievementContainer routes
router.route("/containers")
.get(sanitizeBody, achievementContainerHandlers.queryAll)
.post(sanitizeBody, achievementContainerHandlers.create);

router.route("/containers/:id")
.get(sanitizeBody, achievementContainerHandlers.query)
.put(sanitizeBody, achievementContainerHandlers.update)
.delete(sanitizeBody, achievementContainerHandlers.delete);
*/

module.exports = router;