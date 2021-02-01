const materialsList = {
	d32: {
		count: 0,
		tier: 1,
		position: 1,
		name: 'D32 Steel',
		img: 'images/mats/d32.png'
	},
	bipolar: {
		count: 0,
		tier: 1,
		position: 2,
		name: 'Bipolar Nanoflake',
		img: 'images/mats/bipolar.png'
	},
	polymer: {
		count: 0,
		tier: 1,
		position: 3,
		name: 'Polymerization Preparation',
		img: 'images/mats/polymer.png'
	},
	cryst_unit: {
		count: 0,
		tier: 1,
		position: 4,
		name: 'Crystal Unit',
		img: 'images/mats/cryst_unit.png'
	},
	wh_kohl: {
		count: 0,
		tier: 2,
		position: 5,
		name: 'White Horse Kohl',
		img: 'images/mats/wh_kohl.png'
	},
	l_kohl: {
		count: 0,
		tier: 3,
		position: 18,
		name: 'Loxic Kohl',
		img: 'images/mats/l_kohl.png'
	},
	mang_tryh: {
		count: 0,
		tier: 2,
		position: 6,
		name: 'Manganese Trihydrate',
		img: 'images/mats/mang_tryh.png'
	},
	mang_ore: {
		count: 0,
		tier: 3,
		position: 19,
		name: 'Manganese Ore',
		img: 'images/mats/mang_ore.png'
	},
	grind_pent: {
		count: 0,
		tier: 2,
		position: 7,
		name: 'Grindstone Pentahydrate',
		img: 'images/mats/grind_pent.png'
	},
	grind: {
		count: 0,
		tier: 3,
		position: 20,
		name: 'Grindstone',
		img: 'images/mats/grind.png'
	},
	rma24: {
		count: 0,
		tier: 2,
		position: 8,
		name: 'RMA70-24',
		img: 'images/mats/rma24.png'
	},
	rma12: {
		count: 0,
		tier: 3,
		position: 21,
		name: 'RMA70-12',
		img: 'images/mats/rma12.png'
	},
	orrck_conc: {
		count: 0,
		tier: 2,
		position: 9,
		name: 'Orirock Concentration',
		img: 'images/mats/orrck_conc.png'
	},
	orrck_clust: {
		count: 0,
		tier: 3,
		position: 22,
		name: 'Orirock Cluster',
		img: 'images/mats/orrck_clust.png'
	},
	orrck_cube: {
		count: 0,
		tier: 4,
		position: 31,
		name: 'Orirock Cube',
		img: 'images/mats/orrck_cube.png'
	},
	orrck: {
		count: 0,
		tier: 5,
		position: 37,
		name: 'Orirock',
		img: 'images/mats/orrck.png'
	},
	opt_dev: {
		count: 0,
		tier: 2,
		position: 10,
		name: 'Optimized Device',
		img: 'images/mats/opt_dev.png'
	},
	int_dev: {
		count: 0,
		tier: 3,
		position: 23,
		name: 'Integrated Device',
		img: 'images/mats/int_dev.png'
	},
	dev: {
		count: 0,
		tier: 4,
		position: 32,
		name: 'Device',
		img: 'images/mats/dev.png'
	},
	d_dev: {
		count: 0,
		tier: 5,
		position: 38,
		name: 'Damaged Device',
		img: 'images/mats/d_dev.png'
	},
	polyest_lump: {
		count: 0,
		tier: 2,
		position: 11,
		name: 'Polyester Lump',
		img: 'images/mats/polyest_lump.png'
	},
	polyest_pack: {
		count: 0,
		tier: 3,
		position: 24,
		name: 'Polyester Pack',
		img: 'images/mats/polyest_pack.png'
	},
	polyest: {
		count: 0,
		tier: 4,
		position: 33,
		name: 'Polyester',
		img: 'images/mats/polyest.png'
	},
	est: {
		count: 0,
		tier: 5,
		position: 39,
		name: 'Ester',
		img: 'images/mats/est.png'
	},
	sugar_lump: {
		count: 0,
		tier: 2,
		position: 12,
		name: 'Sugar Lump',
		img: 'images/mats/sugar_lump.png'
	},
	sugar_pack: {
		count: 0,
		tier: 3,
		position: 25,
		name: 'Sugar Pack',
		img: 'images/mats/sugar_pack.png'
	},
	sugar: {
		count: 0,
		tier: 4,
		position: 34,
		name: 'Sugar',
		img: 'images/mats/sugar.png'
	},
	sugar_sub: {
		count: 0,
		tier: 5,
		position: 40,
		name: 'Sugar Substitute',
		img: 'images/mats/sugar_sub.png'
	},
	orrn_block: {
		count: 0,
		tier: 2,
		position: 13,
		name: 'Oriron Block',
		img: 'images/mats/orrn_block.png'
	},
	orrn_clust: {
		count: 0,
		tier: 3,
		position: 26,
		name: 'Oriron Cluster',
		img: 'images/mats/orrn_clust.png'
	},
	orrn: {
		count: 0,
		tier: 4,
		position: 35,
		name: 'Oriron',
		img: 'images/mats/orrn.png'
	},
	orrn_shard: {
		count: 0,
		tier: 5,
		position: 41,
		name: 'Oriron Shard',
		img: 'images/mats/orrn_shard.png'
	},
	keton_coll: {
		count: 0,
		tier: 2,
		position: 14,
		name: 'Keton Colloid',
		img: 'images/mats/keton_coll.png'
	},
	aketon: {
		count: 0,
		tier: 3,
		position: 27,
		name: 'Aketon',
		img: 'images/mats/aketon.png'
	},
	polyket: {
		count: 0,
		tier: 4,
		position: 36,
		name: 'Polyketon',
		img: 'images/mats/polyket.png'
	},
	diket: {
		count: 0,
		tier: 5,
		position: 42,
		name: 'Diketon',
		img: 'images/mats/diket.png'
	},
	poly_gel: {
		count: 0,
		tier: 2,
		position: 15,
		name: 'Polymerized Gel',
		img: 'images/mats/poly_gel.png'
	},
	coag_gel: {
		count: 0,
		tier: 3,
		position: 28,
		name: 'Coagulating Gel',
		img: 'images/mats/coag_gel.png'
	},
	alloy_block: {
		count: 0,
		tier: 2,
		position: 16,
		name: 'Incandescent Alloy Block',
		img: 'images/mats/alloy_block.png'
	},
	alloy: {
		count: 0,
		tier: 3,
		position: 29,
		name: 'Incandescent Alloy',
		img: 'images/mats/alloy.png'
	},
	cryst_circ: {
		count: 0,
		tier: 2,
		position: 17,
		name: 'Crystal Circuit',
		img: 'images/mats/cryst_circ.png'
	},
	cryst_elem: {
		count: 0,
		tier: 3,
		position: 30,
		name: 'Crystal Element',
		img: 'images/mats/cryst_elem.png'
	}
}

export default materialsList;