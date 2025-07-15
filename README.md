# 🪙 Currency‑Converter

**Fast | Modular | Real‑Time**

Convert between any two fiat currencies using live exchange rates. Supports a clean CLI interface—and easy-to-add Web UI. Built with extensibility in mind: swap API providers, add caching/history, and more.

[![MIT License](https://img.shields.io/badge/license-MIT-green)](#license) [![npm version](https://img.shields.io/npm/v/currency-converter)](#)

---

### 🎯 What It Does

- Fetches current exchange rates from your chosen provider (e.g., exchangerate.host)
- Converts amounts instantly via CLI (or Web UI)
- Designed for extensibility: pluggable API modules, caching, historical support

---

### 📸 Quick Demo

```bash
node index.js --from USD --to EUR --amount 100
# 💱 100 USD = 92.45 EUR (Rate: 0.9245)
