"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import axios from "axios";
import Image from "next/image";
import { EmployeeCardItem } from "../components";
import EmployeeList from "../components/EmployeeList";

export default function Home() {
  return <EmployeeList />;
}
