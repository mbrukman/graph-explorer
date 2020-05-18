export const GREMLIN_SERVER_URL = "ws://127.0.0.1:8182/gremlin";


export const InvanaManagementLabel = "InvanaManagement"
export const DefaultNodeBgColor = "#4385b8";
export const DefaultNodeBorderColor = "#777777";
export const DefaultNodeBgPropertyKey = ""; // make sure this key is string.
export const DefaultNodeStrokeWidth = 5;
export const DefaultNodeRadius = 24;
export const DefaultNodeInShapeTextColor = "#dddddd"; // inside the shape
export const DefaultNodeLabelColor = "#dddddd";

export const DefaultLinkPathColor = "#c9c9c9";
export const DefaultLinkTextColor = "#c9c9c9";
export const DefaultLinkStrokeWidth = 2;


export const DefaultLabelVisibility = true;
export const DefaultHoverOpacity = 0.8;


export const linkCurvature = .85;

// export function uuidv4() {
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
//         var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
//         return v.toString(16);
//     });
// }

export const UUIDGenerator = () =>
    ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    );
