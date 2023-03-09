import {createRouter, createWebHistory} from "vue-router";
import { HouseView,  HouseCategoryView } from "@/Views";
import NotFoundView from "../views/404View.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [{
		path: "/",
		name: "housecategory",
		component: HouseCategoryView
	},
	{
		path: "/:id",
		name: "house",
		component: HouseView
	},
	{
		path: "/:catchall(.*)*",
		name: "Not Found",
		component: NotFoundView
	}
  ]
});

export default router;