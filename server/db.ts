import { Deta } from "deta"; // import Deta

// Initialize with a Project Key
const deta = Deta(process.env.DETA_PROJECT_ID);

// This how to connect to or create a database.
export const usersDb = deta.Base("users");

export const facilitiesDb = deta.Base("page_facilities");
export const campusDB = deta.Base("page_campus");
export const departmentsDB = deta.Base("page_departments");

export const pressAndMedia = deta.Base("post_press_and_media");
export const eventsDB = deta.Base("post_events");

export const filesDB = deta.Base("files");
export const notificationsDB = deta.Base("notifications");

export const imagesDB = deta.Base("images");

export const otherDB = deta.Base("other");

// Types Definitioinss

export interface NotificationType {
  key: number;
  title: string;
  link: string;
  date: string;
  type: string;
  expired: boolean;
  deleted: boolean;
  expiryDate: string;
  category: string;
}

export interface CampusPageType {
  key: string;
  title: string;
  about: string;
  cover: string;
  staffs_ids?: string[];
  staffs?: UserType[];
}

export interface UserType {
  key: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  designation: string;
  role: string;
  department: string;
  phone: string;
  address: string;
  socialLinks: {
    facebook: string;
    linkedin: string;
    instagram: string;
    whatsapp: string;
  };
}

export interface FacilityPageType {
  key: string;
  photos: never[];
  title: string;
  about: string;
  cover: string;
  staffs?: UserType[];
  staffs_ids?: string[];
  photos_id?: string[];
}

export interface ImageType {
  key: string;
  data: {
    id: string;
    title: string;
    url_viewer: string;
    url: string;
    display_url: string;
    size: string;
    time: string;
    expiration: string;
    image: {
      filename: string;
      name: string;
      mime: string;
      extension: string;
      url: string;
    };
    thumb: {
      filename: string;
      name: string;
      mime: string;
      extension: string;
      url: string;
    };
    delete_url: string;
  };
  success: boolean;
  status: number;
}
