// ═══════════════════════════════════════════════
// GLOBAL BRANDS — SUPABASE CLIENT
// ═══════════════════════════════════════════════
const SUPA_URL = 'https://qnggcickewzxjeudjysr.supabase.co';
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuZ2djaWNrZXd6eGpldWRqeXNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2MjM4MDMsImV4cCI6MjA4NzE5OTgwM30.ULyeE4Gry6cQPczTdXZs9-R4nF80Hfvr6Z-21GIbyLM';

const sbHeaders = {
  'Content-Type': 'application/json',
  'apikey': SUPA_KEY,
  'Authorization': 'Bearer ' + SUPA_KEY,
  'Prefer': 'return=representation'
};

const sb = {
  // ── USERS ──
  async getUser(email) {
    const r = await fetch(`${SUPA_URL}/rest/v1/gb_users?email=eq.${encodeURIComponent(email)}&limit=1`, { headers: sbHeaders });
    const d = await r.json();
    return d[0] || null;
  },
  async getAllUsers() {
    const r = await fetch(`${SUPA_URL}/rest/v1/gb_users?order=joined_at.desc`, { headers: sbHeaders });
    return await r.json();
  },
  async createUser(user) {
    const r = await fetch(`${SUPA_URL}/rest/v1/gb_users`, {
      method: 'POST', headers: sbHeaders, body: JSON.stringify(user)
    });
    const d = await r.json();
    return Array.isArray(d) ? d[0] : d;
  },
  async updateUser(email, fields) {
    const r = await fetch(`${SUPA_URL}/rest/v1/gb_users?email=eq.${encodeURIComponent(email)}`, {
      method: 'PATCH', headers: sbHeaders, body: JSON.stringify(fields)
    });
    const d = await r.json();
    return Array.isArray(d) ? d[0] : d;
  },
  async upsertUser(user) {
    const r = await fetch(`${SUPA_URL}/rest/v1/gb_users?on_conflict=email`, {
      method: 'POST',
      headers: { ...sbHeaders, 'Prefer': 'resolution=merge-duplicates,return=representation' },
      body: JSON.stringify(user)
    });
    const d = await r.json();
    return Array.isArray(d) ? d[0] : d;
  },

  // ── TRANSACTIONS ──
  async getTransactions(email) {
    const r = await fetch(`${SUPA_URL}/rest/v1/gb_transactions?user_email=eq.${encodeURIComponent(email)}&order=created_at.desc`, { headers: sbHeaders });
    return await r.json();
  },
  async addTransaction(tx) {
    const r = await fetch(`${SUPA_URL}/rest/v1/gb_transactions`, {
      method: 'POST', headers: sbHeaders, body: JSON.stringify(tx)
    });
    return await r.json();
  },
  async getAllTransactions() {
    const r = await fetch(`${SUPA_URL}/rest/v1/gb_transactions?order=created_at.desc`, { headers: sbHeaders });
    return await r.json();
  },

  // ── MESSAGES ──
  async getMessages(email) {
    const r = await fetch(`${SUPA_URL}/rest/v1/gb_messages?user_email=eq.${encodeURIComponent(email)}&order=created_at.asc`, { headers: sbHeaders });
    return await r.json();
  },
  async sendMessage(email, text, sender) {
    const r = await fetch(`${SUPA_URL}/rest/v1/gb_messages`, {
      method: 'POST', headers: sbHeaders,
      body: JSON.stringify({ user_email: email, text, sender, read: sender === 'care' })
    });
    return await r.json();
  },
  async markMessagesRead(email) {
    await fetch(`${SUPA_URL}/rest/v1/gb_messages?user_email=eq.${encodeURIComponent(email)}&sender=eq.user`, {
      method: 'PATCH', headers: sbHeaders, body: JSON.stringify({ read: true })
    });
  },
  async getAllChats() {
    const r = await fetch(`${SUPA_URL}/rest/v1/gb_messages?order=created_at.asc`, { headers: sbHeaders });
    return await r.json();
  }
};
