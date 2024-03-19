import { generalAnalysis } from "@/mock/generalAnalysis";
import { navigation } from "../mock/navigation";
import { recentTransactions } from "../mock/recentTransactions";
import { balance } from "@/mock/balance";

export async function fetchNavigation() {
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      resolve(navigation);
    }, 300);
  });
}

export async function fetchRecentTransactions() {
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      resolve(recentTransactions);
    }, 300);
  });
}

export async function fetchGeneralAnalysis() {
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      resolve(generalAnalysis);
    }, 300);
  });
}

export async function fetchBalance() {
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      resolve(balance);
    }, 300);
  });
}
