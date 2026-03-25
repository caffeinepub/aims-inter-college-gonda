import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Contact {
    name: string;
    email: string;
    phone: string;
    position: string;
}
export interface SchoolInfo {
    principal: string;
    about: string;
    name: string;
    website: string;
    address: string;
    phone: string;
}
export interface backendInterface {
    getContacts(): Promise<Array<Contact>>;
    getSchoolInfo(): Promise<SchoolInfo>;
}
