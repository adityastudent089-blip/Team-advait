import React from 'react'

function createIcon(name, elements) {
  return function Icon({ size = 24, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
      >
        {elements.map(([Tag, attrs], i) => (
          <Tag key={attrs.key || i} {...attrs} />
        ))}
      </svg>
    )
  }
}

export const ArrowDownRight = createIcon("ArrowDownRight", [["path",{"d":"m7 7 10 10","key":"1fmybs"}],["path",{"d":"M17 7v10H7","key":"6fjiku"}]])
export const ArrowRight = createIcon("ArrowRight", [["path",{"d":"M5 12h14","key":"1ays0h"}],["path",{"d":"m12 5 7 7-7 7","key":"xquz4c"}]])
export const CalendarDays = createIcon("CalendarDays", [["path",{"d":"M8 2v4","key":"1cmpym"}],["path",{"d":"M16 2v4","key":"4m81vk"}],["rect",{"width":"18","height":"18","x":"3","y":"4","rx":"2","key":"1hopcy"}],["path",{"d":"M3 10h18","key":"8toen8"}],["path",{"d":"M8 14h.01","key":"6423bh"}],["path",{"d":"M12 14h.01","key":"1etili"}],["path",{"d":"M16 14h.01","key":"1gbofw"}],["path",{"d":"M8 18h.01","key":"lrp35t"}],["path",{"d":"M12 18h.01","key":"mhygvu"}],["path",{"d":"M16 18h.01","key":"kzsmim"}]])
export const MapPin = createIcon("MapPin", [["path",{"d":"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0","key":"1r0f0z"}],["circle",{"cx":"12","cy":"10","r":"3","key":"ilqhr7"}]])
export const Search = createIcon("Search", [["circle",{"cx":"11","cy":"11","r":"8","key":"4ej97u"}],["path",{"d":"m21 21-4.3-4.3","key":"1qie3q"}]])
export const Menu = createIcon("Menu", [["line",{"x1":"4","x2":"20","y1":"12","y2":"12","key":"1e0a9i"}],["line",{"x1":"4","x2":"20","y1":"6","y2":"6","key":"1owob3"}],["line",{"x1":"4","x2":"20","y1":"18","y2":"18","key":"yk5zj1"}]])
export const X = createIcon("X", [["path",{"d":"M18 6 6 18","key":"1bl5f8"}],["path",{"d":"m6 6 12 12","key":"d8bk6v"}]])
export const Music2 = createIcon("Music2", [["circle",{"cx":"8","cy":"18","r":"4","key":"1fc0mg"}],["path",{"d":"M12 18V2l7 4","key":"g04rme"}]])
export const Mic2 = createIcon("Mic2", [["path",{"d":"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12","key":"80a601"}],["path",{"d":"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5","key":"j0ngtp"}],["circle",{"cx":"16","cy":"7","r":"5","key":"d08jfb"}]])
export const Trophy = createIcon("Trophy", [["path",{"d":"M6 9H4.5a2.5 2.5 0 0 1 0-5H6","key":"17hqa7"}],["path",{"d":"M18 9h1.5a2.5 2.5 0 0 0 0-5H18","key":"lmptdp"}],["path",{"d":"M4 22h16","key":"57wxv0"}],["path",{"d":"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22","key":"1nw9bq"}],["path",{"d":"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22","key":"1np0yb"}],["path",{"d":"M18 2H6v7a6 6 0 0 0 12 0V2Z","key":"u46fv3"}]])
export const Palette = createIcon("Palette", [["circle",{"cx":"13.5","cy":"6.5","r":".5","fill":"currentColor","key":"1okk4w"}],["circle",{"cx":"17.5","cy":"10.5","r":".5","fill":"currentColor","key":"f64h9f"}],["circle",{"cx":"8.5","cy":"7.5","r":".5","fill":"currentColor","key":"fotxhn"}],["circle",{"cx":"6.5","cy":"12.5","r":".5","fill":"currentColor","key":"qy21gx"}],["path",{"d":"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z","key":"12rzf8"}]])
export const HeartHandshake = createIcon("HeartHandshake", [["path",{"d":"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z","key":"c3ymky"}],["path",{"d":"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66","key":"4oyue0"}],["path",{"d":"m18 15-2-2","key":"60u0ii"}],["path",{"d":"m15 18-2-2","key":"6p76be"}]])
export const GraduationCap = createIcon("GraduationCap", [["path",{"d":"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z","key":"j76jl0"}],["path",{"d":"M22 10v6","key":"1lu8f3"}],["path",{"d":"M6 12.5V16a6 3 0 0 0 12 0v-3.5","key":"1r8lef"}]])
export const Utensils = createIcon("Utensils", [["path",{"d":"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2","key":"cjf0a3"}],["path",{"d":"M7 2v20","key":"1473qp"}],["path",{"d":"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7","key":"j28e5"}]])
export const Plus = createIcon("Plus", [["path",{"d":"M5 12h14","key":"1ays0h"}],["path",{"d":"M12 5v14","key":"s699le"}]])
export const Clock3 = createIcon("Clock3", [["circle",{"cx":"12","cy":"12","r":"10","key":"1mglay"}],["polyline",{"points":"12 6 12 12 16.5 12","key":"1aq6pp"}]])
export const Users = createIcon("Users", [["path",{"d":"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2","key":"1yyitq"}],["circle",{"cx":"9","cy":"7","r":"4","key":"nufk8"}],["path",{"d":"M22 21v-2a4 4 0 0 0-3-3.87","key":"kshegd"}],["path",{"d":"M16 3.13a4 4 0 0 1 0 7.75","key":"1da9ce"}]])
export const Bookmark = createIcon("Bookmark", [["path",{"d":"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z","key":"1fy3hk"}]])
export const Check = createIcon("Check", [["path",{"d":"M20 6 9 17l-5-5","key":"1gmf2c"}]])
export const ChevronDown = createIcon("ChevronDown", [["path",{"d":"m6 9 6 6 6-6","key":"qrunsl"}]])
export const Sparkles = createIcon("Sparkles", [["path",{"d":"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z","key":"4pj2yx"}],["path",{"d":"M20 3v4","key":"1olli1"}],["path",{"d":"M22 5h-4","key":"1gvqau"}],["path",{"d":"M4 17v2","key":"vumght"}],["path",{"d":"M5 18H3","key":"zchphs"}]])
export const Ticket = createIcon("Ticket", [["path",{"d":"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z","key":"qn84l0"}],["path",{"d":"M13 5v2","key":"dyzc3o"}],["path",{"d":"M13 17v2","key":"1ont0d"}],["path",{"d":"M13 11v2","key":"1wjjxi"}]])
