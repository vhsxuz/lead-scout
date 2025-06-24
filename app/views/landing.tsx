"use client";

import React, { Component } from "react";
import Navbar from "@/app/components/navbar";
import Hook from "@/app/components/hook";
import Demo from "@/app/components/demo";
import { Lead, LandingState } from "@/types/leads";
import Features from "../components/features";
import Carousel from "../components/carousel";

export default class Landing extends Component<{}, LandingState> {
  state: LandingState = {
    industry: "",
    location: "",
    limit: 5,
    loading: false,
    leads: [],
    error: null,
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof LandingState;
    let value: string | number = e.target.value;
    if (name === "limit") value = Number(value);

    this.setState({ [name]: value } as unknown as Pick<LandingState, keyof LandingState>);
  };

  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({ loading: true, error: null, leads: [] });

    const { industry, location, limit } = this.state;

    try {
      const res = await fetch("https://sassquatch-improvement-production.up.railway.app/score-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ industry, location, limit }),
      });

      const data = await res.json();

      if (res.ok) {
        this.setState({ leads: data.leads, loading: false });
      } else {
        this.setState({ error: data.detail || "Failed to fetch leads", loading: false });
      }
    } catch (err: any) {
      this.setState({ error: err.message, loading: false });
    }
  };

  render() {
    const { industry, location, limit, loading, leads, error } = this.state;

    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#0b0c14] to-gray-900 text-white font-sans flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col justify-center text-center px-6">
          <Hook />
          <Carousel />
          <Features />
          <Demo
            industry={industry}
            location={location}
            limit={limit}
            loading={loading}
            leads={leads}
            error={error}
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
          />
        </main>
        <footer id="contact" className="text-sm text-gray-500 text-center py-6 border-t border-gray-800">
          © 2025 Leadscout. All rights reserved.
        </footer>
      </div>
    );
  }
}