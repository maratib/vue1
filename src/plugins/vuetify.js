import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
	treeShake: true,
	// customVariables: ['@/assets/css/variables.scss'],
	theme: {
		dark: true,
		themes: {
			dark: {
				// primary: colors.blue.darken2,
				// accent: colors.grey.darken3,
				// secondary: colors.amber.darken3,
				// info: colors.teal.lighten1,
				// warning: colors.amber.base,
				// error: colors.deepOrange.accent4,
				// success: colors.green.accent3,
			},
			light: {
				primary: "#4490d8",
				myblue: "#4490d8",
				myBg: "#e0e0e0",
				myHeaderBg: "#242537"

			}
		}
	}
});
