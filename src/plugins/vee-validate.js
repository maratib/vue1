import Vue from "vue";
import * as VeeValidate from "vee-validate";
import { extend, localize } from "vee-validate";
import { required, email, integer, min, max, min_value, max_value } from "vee-validate/dist/rules";
import ar from "vee-validate/dist/locale/ar.json";
import en from "vee-validate/dist/locale/en.json";

Vue.use(VeeValidate, { inject: false });


// Install required rule.
extend("required", required);

// Install email rule.
extend("email", email);

// Install email rule.
extend("integer", integer);

// Install min rule.
extend("min", min);

// Install min rule.
extend("max", max);

// Install min rule.
extend("min_value", min_value);

// Install min rule.
extend("max_value", max_value);

// Install Custom Rule
extend('validDate', date => {
	return Date.parse(date + " 23:59:59") >= new Date();
});

// Install Custom Rule
extend('positive', value => {
	return value >= 0;
});

// Install English and Arabic localizations.
localize({
	en: {
		messages: en.messages,
		names: {
			email: "E-mail Address",
			password: "Password"
		},
		fields: {
			password: {
				min: "{_field_} is too short, you want to get hacked?"
			}
		}
	},
	ar: {
		messages: ar.messages,
		names: {
			email: "البريد الاليكتروني",
			password: "كلمة السر"
		},
		fields: {
			password: {
				min: "كلمة السر قصيرة جداً سيتم اختراقك"
			}
		}
	}
});

let LOCALE = "en";

// A simple get/set interface to manage our locale in components.
// This is not reactive, so don't create any computed properties/watchers off it.
Object.defineProperty(Vue.prototype, "locale", {
	get() {
		return LOCALE;
	},
	set(val) {
		LOCALE = val;
		localize(val);
	}
});
