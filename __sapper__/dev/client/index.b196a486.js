import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, c as create_component, e as element, t as text, q as query_selector_all, b as detach_dev, f as claim_space, g as claim_component, h as claim_element, j as children, k as claim_text, l as attr_dev, m as add_location, n as insert_dev, o as mount_component, p as append_dev, r as noop, u as transition_in, w as transition_out, x as destroy_component } from './client.262cfc95.js';
import { N as Navbar, T as Tabbar } from './Tabbar.2b018759.js';

/* src/routes/index.svelte generated by Svelte v3.22.2 */
const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let t1;
	let div;
	let t2;
	let t3;
	let current;

	const navbar = new Navbar({
			props: { title: "Steam Guard" },
			$$inline: true
		});

	const tabbar = new Tabbar({ props: { location: 3 }, $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			create_component(navbar.$$.fragment);
			t1 = space();
			div = element("div");
			t2 = text("72826");
			t3 = space();
			create_component(tabbar.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-uh0s2l\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			claim_component(navbar.$$.fragment, nodes);
			t1 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { id: true, class: true });
			var div_nodes = children(div);
			t2 = claim_text(div_nodes, "72826");
			div_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			claim_component(tabbar.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Guard :: Steam Mobile";
			attr_dev(div, "id", "guard");
			attr_dev(div, "class", "svelte-14g7ou8");
			add_location(div, file, 10, 0, 221);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			mount_component(navbar, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, t2);
			insert_dev(target, t3, anchor);
			mount_component(tabbar, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(navbar.$$.fragment, local);
			transition_in(tabbar.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(navbar.$$.fragment, local);
			transition_out(tabbar.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			destroy_component(navbar, detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div);
			if (detaching) detach_dev(t3);
			destroy_component(tabbar, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);
	$$self.$capture_state = () => ({ Navbar, Tabbar });
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYjE5NmE0ODYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXIuc3ZlbHRlJztcblx0aW1wb3J0IFRhYmJhciBmcm9tICcuLi9jb21wb25lbnRzL1RhYmJhci5zdmVsdGUnO1xuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPkd1YXJkIDo6IFN0ZWFtIE1vYmlsZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48TmF2YmFyIHRpdGxlPVwiU3RlYW0gR3VhcmRcIiAvPlxuPGRpdiBpZD1cImd1YXJkXCI+XG5cdDcyODI2XG48L2Rpdj5cbjxUYWJiYXIgbG9jYXRpb249ezN9IC8+XG5cbjxzdHlsZT5cblx0I2d1YXJke1xuXHRcdHBhZGRpbmc6IDkwcHggMzBweDtcblx0XHRwYWRkaW5nLXJpZ2h0OiAwO1xuXHRcdHBhZGRpbmctYm90dG9tOiA2MHB4O1xuXHR9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBYWtCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
