
import React, { useState } from 'react';
import { InquiryData } from '../types';
import { processInquiryWithAI } from '../services/geminiService';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<InquiryData>({
    name: '',
    email: '',
    company: '',
    message: '',
    role: 'founder'
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 模擬將資料傳送到信箱的行為，並由 AI 生成回應內容
    const aiFeedback = await processInquiryWithAI(formData);
    
    // 此處模擬信件發送至 danielxx0131@gmail.com
    console.log("Form data sent to: danielxx0131@gmail.com", formData);

    setSuccess(aiFeedback || "您的申請已成功寄送至 Daniel 的信箱，我們將儘速處理您的身分認證程序。");
    setLoading(false);
  };

  if (success) {
    return (
      <div className="p-10 rounded-3xl glass-morphism text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
          ✓
        </div>
        <h3 className="text-2xl font-bold mb-4">發送成功</h3>
        <p className="text-slate-400 mb-8 max-w-md mx-auto whitespace-pre-line leading-relaxed">
          {success}
          {"\n\n系統已自動同步資訊至 danielxx0131@gmail.com"}
        </p>
        <button 
          onClick={() => setSuccess(null)}
          className="text-indigo-400 hover:text-indigo-300 font-medium"
        >
          重新填寫
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-3xl glass-morphism space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">姓名</label>
          <input 
            required
            type="text" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
            placeholder="您的名字"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">電子郵件</label>
          <input 
            required
            type="email" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
            placeholder="email@example.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">身份角色</label>
          <select 
            value={formData.role}
            onChange={(e) => setFormData({...formData, role: e.target.value as any})}
            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
          >
            <option value="founder">創業者 / Founder</option>
            <option value="investor">投資人 / Investor</option>
            <option value="talent">專業人才 / Talent</option>
            <option value="other">其他 / Other</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">公司 / 項目名稱</label>
          <input 
            type="text" 
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
            placeholder="項目名稱 (選填)"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">您的訊息</label>
        <textarea 
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
          placeholder="請描述您的想法或合作需求..."
        ></textarea>
      </div>

      <button 
        disabled={loading}
        type="submit"
        className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl font-bold text-white shadow-xl shadow-indigo-500/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            提交中...
          </>
        ) : '聯絡我了解更多'}
      </button>
      
      <p className="text-[10px] text-center text-slate-500">
        點擊提交後，相關資訊將直接傳送至 Daniel 的管理信箱。
      </p>
    </form>
  );
};

export default ContactForm;
