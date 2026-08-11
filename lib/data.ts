import { supabase } from './supabase';
import type { RequestItem, Status } from './types';
const KEY = 'darro-x-ict-requests-v2';
export async function getRequests(): Promise<RequestItem[]> {
  try {
    if (supabase) {
      const { data, error } = await supabase.from('ict_requests').select('*').order('created_at', { ascending: false });
      if (!error && data) return data.map((r:any) => ({...r, createdAt:r.created_at, inspectionRemarks:r.inspection_remarks, materialsRequired:r.materials_required, dateCompleted:r.date_completed, materialsUsed:r.materials_used}));
    }
  } catch {}
  if (typeof window === 'undefined') return [];
  try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; }
}
export async function saveRequest(r: RequestItem) {
  if (supabase) {
    try {
      const { error } = await supabase.from('ict_requests').insert({ id:r.id,name:r.name,division:r.division,services:r.services,description:r.description,date:r.date,time:r.time,status:r.status,created_at:r.createdAt });
      if (!error) return;
    } catch {}
  }
  if (typeof window !== 'undefined') {
    const all = await getRequests(); localStorage.setItem(KEY, JSON.stringify([r,...all]));
  }
}
export async function updateStatus(id:string,status:Status) {
  if (supabase) { try { const {error}=await supabase.from('ict_requests').update({status}).eq('id',id); if(!error)return; } catch {} }
  if (typeof window !== 'undefined') { const all=await getRequests(); localStorage.setItem(KEY,JSON.stringify(all.map(r=>r.id===id?{...r,status}:r))); }
}
