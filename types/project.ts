export interface ProjectData {
  shop_name: string | null;
  category: string | null;
  services: string[] | null;
  timing: string | null;
  contact: string | null;
  address: string | null;
  id?: number;
  slug?: string;
  createdAt?: string;
}
