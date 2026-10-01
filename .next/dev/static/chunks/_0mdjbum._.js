(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/tours/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ToursPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TourCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TourCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$tours$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/tours.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ToursPage() {
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const filteredTours = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$tours$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tours"].filter((tour)=>{
        const matchesCategory = activeCategory === 'all' || tour.category === activeCategory;
        const matchesSearch = tour.name.toLowerCase().includes(searchQuery.toLowerCase()) || tour.location.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-16 md:pt-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-20 md:py-28 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-cover bg-center",
                        style: {
                            backgroundImage: 'url(https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/60"
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 text-center text-white px-4 max-w-3xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-display text-4xl md:text-5xl font-bold mb-4",
                                children: "All Tours & Experiences"
                            }, void 0, false, {
                                fileName: "[project]/app/tours/page.js",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-white/90",
                                children: "Discover your next adventure — from Himalayan treks to coastal getaways"
                            }, void 0, false, {
                                fileName: "[project]/app/tours/page.js",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white sticky top-16 md:top-20 z-40 border-b shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 md:px-8 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row gap-4 items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full md:w-80",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search tours or destinations...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tours/page.js",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",
                                        children: "🔍"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tours/page.js",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tours/page.js",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$tours$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCategory(cat.id),
                                        className: `px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === cat.id ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`,
                                        children: [
                                            cat.icon,
                                            " ",
                                            cat.name
                                        ]
                                    }, cat.id, true, {
                                        fileName: "[project]/app/tours/page.js",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/tours/page.js",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tours/page.js",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/tours/page.js",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section-padding bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-max",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: [
                                    "Showing ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-gray-900",
                                        children: filteredTours.length
                                    }, void 0, false, {
                                        fileName: "[project]/app/tours/page.js",
                                        lineNumber: 79,
                                        columnNumber: 23
                                    }, this),
                                    " tours"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tours/page.js",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/tours/page.js",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        filteredTours.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: filteredTours.map((tour)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TourCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    tour: tour
                                }, tour.id, false, {
                                    fileName: "[project]/app/tours/page.js",
                                    lineNumber: 86,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/tours/page.js",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-6xl mb-4",
                                    children: "🔍"
                                }, void 0, false, {
                                    fileName: "[project]/app/tours/page.js",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-xl font-semibold text-gray-900 mb-2",
                                    children: "No tours found"
                                }, void 0, false, {
                                    fileName: "[project]/app/tours/page.js",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "Try adjusting your search or filter criteria"
                                }, void 0, false, {
                                    fileName: "[project]/app/tours/page.js",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tours/page.js",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tours/page.js",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tours/page.js",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/tours/page.js",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(ToursPage, "CnnAERiQwtqlrbbPu8thA1kjTcU=");
_c = ToursPage;
var _c;
__turbopack_context__.k.register(_c, "ToursPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/TourCard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TourCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
function TourCard({ tour }) {
    const difficultyColor = {
        Easy: 'bg-green-100 text-green-700',
        'Easy to Moderate': 'bg-blue-100 text-blue-700',
        Moderate: 'bg-yellow-100 text-yellow-700',
        Difficult: 'bg-red-100 text-red-700'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-56 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500",
                        style: {
                            backgroundImage: `url(${tour.image})`
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/TourCard.js",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/components/TourCard.js",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `px-3 py-1 rounded-full text-xs font-semibold ${difficultyColor[tour.difficulty]}`,
                            children: tour.difficulty
                        }, void 0, false, {
                            fileName: "[project]/components/TourCard.js",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/TourCard.js",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-bold text-gray-900",
                                children: [
                                    "₹",
                                    tour.price.toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TourCard.js",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-500 line-through ml-1",
                                children: [
                                    "₹",
                                    tour.originalPrice.toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TourCard.js",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TourCard.js",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 left-4 right-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display font-bold text-xl text-white mb-1",
                                children: tour.name
                            }, void 0, false, {
                                fileName: "[project]/components/TourCard.js",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/80 text-sm flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "📍"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TourCard.js",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    tour.location
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TourCard.js",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TourCard.js",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TourCard.js",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 text-sm text-gray-500 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1",
                                children: [
                                    "⏱️ ",
                                    tour.duration
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TourCard.js",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1",
                                children: [
                                    "👥 ",
                                    tour.groupSize
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TourCard.js",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TourCard.js",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2",
                        children: tour.description
                    }, void 0, false, {
                        fileName: "[project]/components/TourCard.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-yellow-400",
                                        children: "★"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TourCard.js",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-gray-900",
                                        children: tour.rating
                                    }, void 0, false, {
                                        fileName: "[project]/components/TourCard.js",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400 text-sm",
                                        children: [
                                            "(",
                                            tour.reviews,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/TourCard.js",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TourCard.js",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/tours/${tour.id}`,
                                className: "text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center gap-1 group",
                                children: [
                                    "View Details",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "group-hover:translate-x-1 transition-transform",
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TourCard.js",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TourCard.js",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TourCard.js",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TourCard.js",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TourCard.js",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = TourCard;
var _c;
__turbopack_context__.k.register(_c, "TourCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/tours.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories,
    "testimonials",
    ()=>testimonials,
    "tours",
    ()=>tours
]);
const tours = [
    {
        id: 1,
        name: "Kudremukh Trek",
        category: "trekking",
        location: "Chikmagalur, Karnataka",
        duration: "2 Days / 1 Night",
        difficulty: "Moderate",
        price: 4500,
        originalPrice: 5500,
        rating: 4.8,
        reviews: 127,
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
        description: "Trek through the lush green Western Ghats to the peak of Kudremukh, Karnataka's highest trekking destination. Experience dense shola forests, rolling grasslands, and breathtaking views.",
        highlights: [
            "Western Ghats biodiversity",
            "Shola forest trails",
            "Sunrise from the peak",
            "Waterfall crossings"
        ],
        inclusions: [
            "Transport from Bangalore",
            "Trek guide",
            "Meals (1 breakfast, 1 lunch)",
            "Camping equipment",
            "First aid kit"
        ],
        groupSize: "8-15 people",
        bestSeason: "October to May"
    },
    {
        id: 2,
        name: "Rishikesh River Rafting & Camping",
        category: "adventure",
        location: "Rishikesh, Uttarakhand",
        duration: "3 Days / 2 Nights",
        difficulty: "Easy to Moderate",
        price: 7500,
        originalPrice: 9000,
        rating: 4.9,
        reviews: 203,
        image: "https://images.unsplash.com/photo-1600200425-8a1b1c1e1e1e?w=800&q=80",
        description: "Experience the thrill of white-water rafting on the Ganges combined with beach camping under the stars. Perfect blend of adventure and relaxation.",
        highlights: [
            "Grade 3-4 rapids",
            "Beach camping",
            "Bonfire & BBQ",
            "Cliff jumping",
            "Ganga Aarti"
        ],
        inclusions: [
            "Transport from Delhi",
            "Rafting gear",
            "Camping stay",
            "All meals",
            "Professional instructors"
        ],
        groupSize: "10-20 people",
        bestSeason: "September to June"
    },
    {
        id: 3,
        name: "Coorg Coffee Estate Road Trip",
        category: "roadtrip",
        location: "Coorg, Karnataka",
        duration: "2 Days / 1 Night",
        difficulty: "Easy",
        price: 5500,
        originalPrice: 6500,
        rating: 4.7,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
        description: "A scenic drive through the coffee capital of India. Stay in a plantation resort, walk through aromatic coffee estates, and enjoy the misty hills of Coorg.",
        highlights: [
            "Coffee estate stay",
            "Abbey Falls visit",
            "Tadiandamol peak sunset",
            "Local cuisine tasting"
        ],
        inclusions: [
            "Self-drive SUV",
            "Resort stay",
            "Breakfast & dinner",
            "Coffee estate tour",
            "Fuel & tolls"
        ],
        groupSize: "4-8 people",
        bestSeason: "September to May"
    },
    {
        id: 4,
        name: "Hampta Pass Trek",
        category: "trekking",
        location: "Himachal Pradesh",
        duration: "4 Days / 3 Nights",
        difficulty: "Difficult",
        price: 12500,
        originalPrice: 15000,
        rating: 4.9,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
        description: "One of the most dramatic treks in the Himalayas, crossing from the lush Kullu Valley to the arid Spiti Valley. A true adventure for experienced trekkers.",
        highlights: [
            "Cross 4,270m pass",
            "Chandra River campsite",
            "Spiti Valley entry",
            "Shepherds' trails"
        ],
        inclusions: [
            "Transport from Manali",
            "Trek leader & guide",
            "All meals during trek",
            "Camping equipment",
            "Permits"
        ],
        groupSize: "6-12 people",
        bestSeason: "June to September"
    },
    {
        id: 5,
        name: "Wayanad Wildlife & Bamboo Rafting",
        category: "adventure",
        location: "Wayanad, Kerala",
        duration: "2 Days / 1 Night",
        difficulty: "Easy",
        price: 6000,
        originalPrice: 7200,
        rating: 4.6,
        reviews: 74,
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
        description: "Explore the wild side of Wayanad with bamboo rafting on the Kabini River, a wildlife safari in Tholpetty, and a stay in a treehouse surrounded by nature.",
        highlights: [
            "Bamboo rafting",
            "Wildlife safari",
            "Treehouse stay",
            "Banasura Sagar Dam",
            "Edakkal Caves"
        ],
        inclusions: [
            "Transport from Bangalore",
            "Treehouse stay",
            "Safari tickets",
            "Rafting session",
            "All meals"
        ],
        groupSize: "8-14 people",
        bestSeason: "October to May"
    },
    {
        id: 6,
        name: "Chikmagalur Hill Station Getaway",
        category: "roadtrip",
        location: "Chikmagalur, Karnataka",
        duration: "3 Days / 2 Nights",
        difficulty: "Easy",
        price: 8000,
        originalPrice: 9500,
        rating: 4.7,
        reviews: 112,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
        description: "Escape to the hills of Chikmagalur with a curated road trip covering Mullayanagiri peak, Baba Budangiri, Hebbe Falls, and a coffee estate homestay.",
        highlights: [
            "Mullayanagiri sunrise",
            "Hebbe Falls",
            "Coffee estate homestay",
            "Z-point sunset",
            "Local food trail"
        ],
        inclusions: [
            "Transport (self-drive support)",
            "Homestay stay",
            "All meals",
            "Sightseeing",
            "Photography guide"
        ],
        groupSize: "4-10 people",
        bestSeason: "September to June"
    },
    {
        id: 7,
        name: "Tadiandamol Sunrise Trek",
        category: "trekking",
        location: "Coorg, Karnataka",
        duration: "1 Day",
        difficulty: "Moderate",
        price: 2500,
        originalPrice: 3000,
        rating: 4.8,
        reviews: 198,
        image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80",
        description: "A thrilling night trek to the highest peak of Coorg. Watch the sunrise paint the Western Ghats in gold from 1,748 meters above sea level.",
        highlights: [
            "Night trekking",
            "Sunrise from peak",
            "Shola forest walk",
            "Cloud formations",
            "Hot breakfast at base"
        ],
        inclusions: [
            "Transport from Bangalore",
            "Trek guide",
            "Breaklight snacks",
            "Breakfast",
            "First aid"
        ],
        groupSize: "10-20 people",
        bestSeason: "October to April"
    },
    {
        id: 8,
        name: "Ladakh Bike Expedition",
        category: "roadtrip",
        location: "Ladakh, Jammu & Kashmir",
        duration: "7 Days / 6 Nights",
        difficulty: "Difficult",
        price: 28000,
        originalPrice: 32000,
        rating: 5.0,
        reviews: 87,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
        description: "The ultimate road trip through the land of high passes. Ride over Khardung La, camp by Pangong Lake, and experience the raw beauty of Ladakh.",
        highlights: [
            "Khardung La pass (5,359m)",
            "Pangong Lake camping",
            "Nubra Valley",
            "Magnetic Hill",
            "Monastery visits"
        ],
        inclusions: [
            "Royal Enfield bike",
            "Fuel",
            "Hotel stays (5 nights)",
            "Camping at Pangong",
            "Meals (breakfast & dinner)",
            "Support vehicle",
            "Permits"
        ],
        groupSize: "6-10 riders",
        bestSeason: "June to September"
    },
    {
        id: 9,
        name: "Sakleshpur Rail Trek & Camping",
        category: "camping",
        location: "Sakleshpur, Karnataka",
        duration: "2 Days / 1 Night",
        difficulty: "Easy to Moderate",
        price: 4000,
        originalPrice: 4800,
        rating: 4.6,
        reviews: 95,
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
        description: "Walk along abandoned railway tracks through tunnels and bridges in the Western Ghats, then camp under the stars with a bonfire and stargazing session.",
        highlights: [
            "Railway track trek",
            "Tunnel exploration",
            "Bridge crossings",
            "Bonfire & BBQ",
            "Stargazing"
        ],
        inclusions: [
            "Transport from Bangalore",
            "Camping equipment",
            "BBQ dinner",
            "Breakfast",
            "Guide & support"
        ],
        groupSize: "10-18 people",
        bestSeason: "October to March"
    },
    {
        id: 10,
        name: "Andaman Island Hopping",
        category: "adventure",
        location: "Andaman & Nicobar Islands",
        duration: "5 Days / 4 Nights",
        difficulty: "Easy",
        price: 18500,
        originalPrice: 22000,
        rating: 4.9,
        reviews: 143,
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
        description: "Discover the pristine beaches and turquoise waters of the Andamans. Snorkel at Elephant Beach, visit the Cellular Jail, and relax at Radhanagar Beach.",
        highlights: [
            "Radhanagar Beach (Asia's best)",
            "Elephant Beach snorkeling",
            "Cellular Jail light show",
            "Glass bottom boat ride",
            "Island hopping"
        ],
        inclusions: [
            "Flights from Bangalore",
            "Resort stay (4 nights)",
            "All meals",
            "Ferry tickets",
            "Water sports",
            "Airport transfers"
        ],
        groupSize: "8-16 people",
        bestSeason: "October to May"
    }
];
const categories = [
    {
        id: "all",
        name: "All Tours",
        icon: "🌍"
    },
    {
        id: "trekking",
        name: "Trekking",
        icon: "🏔️"
    },
    {
        id: "roadtrip",
        name: "Road Trips",
        icon: "🚗"
    },
    {
        id: "adventure",
        name: "Adventure",
        icon: "🪂"
    },
    {
        id: "camping",
        name: "Camping",
        icon: "⛺"
    }
];
const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        location: "Bangalore",
        avatar: "PS",
        rating: 5,
        text: "PackLight Trips made my first trek absolutely unforgettable! The guides were knowledgeable, safety was paramount, and the Kudremukh sunrise was worth every step. Already booked my next trip!",
        tour: "Kudremukh Trek"
    },
    {
        id: 2,
        name: "Rahul Mehta",
        location: "Mumbai",
        avatar: "RM",
        rating: 5,
        text: "The Ladakh bike expedition was a dream come true. Flawless planning, amazing support vehicle, and the best routes. These guys know adventure travel like no one else.",
        tour: "Ladakh Bike Expedition"
    },
    {
        id: 3,
        name: "Ananya Krishnan",
        location: "Chennai",
        avatar: "AK",
        rating: 5,
        text: "Booked the Andaman trip for our honeymoon. Perfect itinerary, beautiful resorts, and the snorkeling at Elephant Beach was magical. Highly recommend PackLight Trips!",
        tour: "Andaman Island Hopping"
    },
    {
        id: 4,
        name: "Vikram Reddy",
        location: "Hyderabad",
        avatar: "VR",
        rating: 5,
        text: "The Coorg road trip was perfectly organized. Great company, amazing food, and the coffee estate stay was a unique experience. Will definitely travel with them again!",
        tour: "Coorg Coffee Estate Road Trip"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0mdjbum._.js.map