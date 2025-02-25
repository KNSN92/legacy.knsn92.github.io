
export type Project = {
    title: string;
    tags: string[];
    description: string;
    image?: string | null;
    github?: string | null;
}

export type TagIcon = { [tag: string] : string }

declare module "/projects.json" {
    export const value: Project[];
}

declare module "/tag_icon.json" {
    export const value: TagIcon[];
}
