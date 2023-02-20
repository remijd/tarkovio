export type Json = string | number | boolean | null | { [key: string]: Json };

export interface Database {
  public: {
    Tables: {
      profile: {
        Row: {
          email: string | null;
          id: number;
          login: string | null;
          nickname: string | null;
        };
        Insert: {
          email?: string | null;
          id?: number;
          login?: string | null;
          nickname?: string | null;
        };
        Update: {
          email?: string | null;
          id?: number;
          login?: string | null;
          nickname?: string | null;
        };
      };
      profiles: {
        Row: {
          avatar_url: string | null;
          full_name: string | null;
          id: string;
          updated_at: string | null;
          username: string | null;
          website: string | null;
        };
        Insert: {
          avatar_url?: string | null;
          full_name?: string | null;
          id: string;
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
        };
        Update: {
          avatar_url?: string | null;
          full_name?: string | null;
          id?: string;
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
