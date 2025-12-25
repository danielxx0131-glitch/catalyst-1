
export interface InquiryData {
  name: string;
  email: string;
  company?: string;
  message: string;
  role: 'founder' | 'investor' | 'talent' | 'other';
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}
